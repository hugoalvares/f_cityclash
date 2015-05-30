package com.lovesoft.cityclash;

import org.json.JSONObject;

/**
 * Created by Hugo on 29/05/2015.
 */
public class Regras {

    private static final String stIpServidor = "http://192.168.0.10";

    public static void login (String stEmail, String stSenha) {
        try {
            // monta parâmetros
            JSONObject joParams = new JSONObject();
            joParams.put("funcao", "login");
            joParams.put("email", stEmail);
            joParams.put("senha", stSenha);

            // chama servidor
            new Servidor(stIpServidor, joParams).execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void cadastro (String stEmail, String stApelido, String stSenha1, String stSenha2) {
        try {
            if (stSenha1 == stSenha2)

            // monta parâmetros
            JSONObject joParams = new JSONObject();
            joParams.put("funcao", "login");
            joParams.put("email", stEmail);
            joParams.put("apelido", stApelido);
            joParams.put("senha", stSenha1);

            // chama servidor
            new Servidor(stIpServidor, joParams).execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
