package com.lovesoft.cityclash;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;

/**
 * Created by Hugo on 15/05/2015.
 */
public class ServerThread {

    public static JSONObject chamaServidor() {
        new Thread(new Runnable(){
            public void run() {
                JSONObject jsonResponse = new JSONObject();
                try {
                    DefaultHttpClient defaultHttpClient = new DefaultHttpClient();
                    HttpGet method = new HttpGet(new URI("http://192.168.43.62"));
                    HttpResponse response = defaultHttpClient.execute(method);
                    InputStream data = response.getEntity().getContent();

                    // convert result to json
                    BufferedReader streamReader = new BufferedReader(new InputStreamReader(data, "UTF-8"));
                    StringBuilder responseStrBuilder = new StringBuilder();
                    String inputStr;
                    while ((inputStr = streamReader.readLine()) != null) {
                        responseStrBuilder.append(inputStr);
                    }
                    jsonResponse = new JSONObject(responseStrBuilder.toString());
                } catch (Exception ignored) {
                }
                //return jsonResponse;
            }
        }).start();
        return new JSONObject();
    }

}
