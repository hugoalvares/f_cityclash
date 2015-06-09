package com.lovesoft.cityclash;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by Hugo on 20/05/2015.
 */
public class Resposta {

    public static void trataRetorno(JSONObject joRetorno) {
        try {
            String funcao = joRetorno.getString("funcao");
            JSONArray dados = joRetorno.getJSONArray("data");

            // escrever funções abaixo
            if (funcao == "buscaOrganizacoes") {
                buscaOrganizacoes(dados);
            } else if (funcao == "cadastraOrganizacao") {
                cadastraOrganizacao();
            } else if (funcao == "creditaGestor") {
                creditaGestor();
            } else if (funcao == "login") {
                login(dados);
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
            Log.i("debugger", "dado não encontrado");
        }
    }

    private static void buscaOrganizacoes(JSONArray dados) {
        try {
            Log.i("debugger", dados.getJSONObject(0).getString("nome"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

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

    }

}
