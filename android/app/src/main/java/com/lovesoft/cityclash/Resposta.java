package com.lovesoft.cityclash;

import android.app.Activity;
import android.util.Log;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Created by Hugo on 20/05/2015.
 */
public class Resposta {

    public static void trataRetorno(Activity coActivity, JSONObject joRetorno) {
        try {
            String stFuncao = joRetorno.getString("funcao");
            JSONArray jaDados = joRetorno.getJSONArray("data");
            //coActivity.get;
            // escrever funções abaixo
            if (stFuncao.equals("login")) {
                login(jaDados);
            } else if (stFuncao.equals("cadastro")) {
                cadastro();
            }
            else if (funcao == "cadastrarGestor") {
                cadastrarGestor();
            }
            else if (funcao == "debitaGestor") {
                debitaGestor();
            }

            else if (funcao == "comprarInvestimento") {
                comprarInvestimento();
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void login(JSONArray jaDados) {
        try {
            if (jaDados.length() > 0) {

            } else {
                Log.w("login", "gestor não encontrado");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

<<<<<<< HEAD
    private static void cadastro() {
        try {
            // cadastro realizado com sucesso
        } catch (Exception e) {
            e.printStackTrace();
        }
=======
    private static void comprarInvestimento() {
        // deu certo
    }

    private static void cadastraOrganizacao() {
        // deu certo
    }

    private static void debitaGestor() {
        // deu certo
    }
    private static void cadastrarGestor() {
        // deu certo
    }
    private static void creditaGestor() {
        // deu certo
    }

    private static void login(JSONArray dados) {

>>>>>>> 210d2f72fcb6c820383bc9987280001e5664e4ef
    }

}
