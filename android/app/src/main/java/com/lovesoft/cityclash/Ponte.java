package com.lovesoft.cityclash;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by Hugo on 20/05/2015.
 */
public class Ponte {

    public static void trataRetorno(JSONObject retorno) {
        try {
            String funcao = retorno.getString("funcao");
            JSONArray dados = retorno.getJSONArray("data");
            if (funcao == "buscaOrganizacoes") {
                buscaOrganizacoes(dados);
            }
        } catch (JSONException e) {
            Log.i("debugger", "dado não encontrado");
        }
    }

    private static void buscaOrganizacoes(JSONArray dados) {
        try {
            Log.i("debugger", dados.getJSONObject(0).getString("nome"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

}
