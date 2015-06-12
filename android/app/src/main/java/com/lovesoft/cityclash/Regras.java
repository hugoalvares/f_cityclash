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

<<<<<<< HEAD
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
=======
    public static void castrarInvestimento (String stNome,String stPreco,String stTempoconstrucao,String stManutencao ) {
        try {

            // monta parâmetros
            JSONObject joParams = new JSONObject();
            joParams.put("funcao", "castrarInvestimento");

            joParams.put("nome", stNome);
            joParams.put("preco", stPreco);
            joParams.put("tempoconstrucao", stTempoconstrucao);
            joParams.put("manutencao", stManutencao);

            // chama servidor
            new Servidor(stIpServidor, joParams).execute();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void castrarTipoReceita (int stNome) {
        try {

            // monta parâmetros
            JSONObject joParams = new JSONObject();
            joParams.put("funcao", "castrarTipoReceita");
            joParams.put("nome", stNome);


            // chama servidor
            new Servidor(stIpServidor, joParams).execute();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public static void castrarOrganizacao (int stNome, int codigoDiretor) {
        try {

                // monta parâmetros
                JSONObject joParams = new JSONObject();
                joParams.put("funcao", "cadastrarOrganizacao");
                joParams.put("nome", stNome);
                joParams.put("int", codigoDiretor);

                // chama servidor
                new Servidor(stIpServidor, joParams).execute();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void cadastro (String stEmail, String stApelido, String stSenha1, String stSenha2) {
        try {
            if (stSenha1 == stSenha2) {
                // monta parâmetros
                JSONObject joParams = new JSONObject();
                joParams.put("funcao", "login");
                joParams.put("email", stEmail);
                joParams.put("apelido", stApelido);
                joParams.put("senha", stSenha1);

                // chama servidor
                new Servidor(stIpServidor, joParams).execute();
            }
>>>>>>> 210d2f72fcb6c820383bc9987280001e5664e4ef
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
