package com.lovesoft.cityclash;

import android.os.AsyncTask;
import android.os.StrictMode;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;


public class MainActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button button = (Button) findViewById(R.id.btnChamaServidor);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                JSONObject joParams = new JSONObject();
                try {
                    joParams.put("test", true);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                serverRequest("http://10.100.10.58", joParams);
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    private static String serverRequest(String stUrl, JSONObject joParams){
        String stReturn = "";
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
            stReturn = convertInputStreamToString(inputStream);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return stReturn;
    }

    private static String convertInputStreamToString(InputStream inputStream) throws IOException {
        BufferedReader bufferedReader = new BufferedReader( new InputStreamReader(inputStream));
        String line = "";
        String result = "";
        while((line = bufferedReader.readLine()) != null) {
            result += line;
        }
        inputStream.close();
        return result;
    }

    private class MyAsyncTask extends AsyncTask<Void, Void, Void> {

        public MyAsyncTask(boolean showLoading) {
            super();
            // do stuff
        }

        // doInBackground() et al.
    }

}
