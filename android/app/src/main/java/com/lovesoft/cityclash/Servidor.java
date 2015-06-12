package com.lovesoft.cityclash;

import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import static com.lovesoft.cityclash.Resposta.trataRetorno;

/**
* Created by Hugo on 28/05/2015.
*/
public class Servidor extends AsyncTask<Void, Void, Void> {

    private static final String stUrl = "http://192.168.43.62:9091";
    JSONObject joParams;
    public Callback delegate = null;

    public Servidor(JSONObject joParams) {
        super();
        this.joParams = joParams;
    }

    @Override
    protected Void doInBackground(Void... params) {
        serverRequest(stUrl, joParams);
        return null;
    }

    @Override
    protected Void onPostExecute(JSONObject joResult) {
        delegate.processFinish(joResult);
        return null;
    }

    protected void serverRequest(String stUrl, JSONObject joParams) {
        try {
            // cria objeto de requisição
            HttpClient httpClient = new DefaultHttpClient();
            // cria objeto de método post
            HttpPost httPost = new HttpPost(stUrl);
            // transforma parâmetros em string
            StringEntity stringEntity = new StringEntity(joParams.toString());
            // seta os parâmetros no objeto método post
            httPost.setEntity(stringEntity);
            // define que a requisição é tipo application/json
            httPost.setHeader("Accept", "application/json");
            httPost.setHeader("Content-type", "application/json");
            // executa a requisição
            HttpResponse httpResponse = httpClient.execute(httPost);
            // busca o retorno da requisição
            InputStream inputStream = httpResponse.getEntity().getContent();
            // converte retorno da requisição para string e retorna
            //trataRetorno(this.coActivity, new JSONObject(convertInputStreamToString(inputStream)));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected String convertInputStreamToString(InputStream inputStream) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        String line = "";
        String result = "";
        while ((line = bufferedReader.readLine()) != null) {
            result += line;
        }
        inputStream.close();
        return result;
    }
}

