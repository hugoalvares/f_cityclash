package com.lovesoft.cityclash;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;

/**
 * Created by Hugo on 15/05/2015.
 */
public class Server {

    public static void chamaServidor() throws URISyntaxException, IOException {
        new Thread(new Runnable(){
            public void run() {
                try {
                    DefaultHttpClient defaultHttpClient = new DefaultHttpClient();
                    HttpGet method = new HttpGet(new URI("http://10.0.2.2"));
                    HttpResponse response = defaultHttpClient.execute(method);
                    InputStream data = response.getEntity().getContent();
                } catch (IOException e) {
                    e.printStackTrace();
                } catch (URISyntaxException e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }
}
