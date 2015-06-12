package com.lovesoft.cityclash;

import android.content.Context;

import org.json.JSONObject;

/**
 * Created by Hugo on 29/05/2015.
 */
public class Regras {

    private static final String stIpServidor = "http://192.168.43.62:9091";

    public static void login (Context coActivity, String stEmail, String stSenha) {
        try {
            // monta parâmetros
            JSONObject joParams = new JSONObject();
            joParams.put("funcao", "login");
            joParams.put("email", stEmail);
            joParams.put("senha", stSenha);

            // chama servidor
            new Servidor(joParams).execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void cadastro (String stEmail, String stApelido, String stSenha) {
        try {
            // monta parâmetros
            JSONObject joParams = new JSONObject();
            joParams.put("funcao", "cadastro");
            joParams.put("email", stEmail);
            joParams.put("apelido", stApelido);
            joParams.put("senha", stSenha);

            // chama servidor
            //new Servidor(coActivity, stIpServidor, joParams).execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
