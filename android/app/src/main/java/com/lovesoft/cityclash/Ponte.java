package com.lovesoft.cityclash;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by Hugo on 20/05/2015.
 */
public class Ponte {

    public static String trataRetorno(JSONObject dados) {
        try {
            JSONArray organizacoes = dados.getJSONArray("data");
            Log.i("debugger", organizacoes.getJSONObject(0).getString("nome"));
        } catch (JSONException e) {
            Log.i("debugger", "dado não encontrado");
        }
        return "ok";
    }
}
