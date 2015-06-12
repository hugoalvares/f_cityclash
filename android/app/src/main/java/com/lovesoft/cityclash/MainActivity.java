package com.lovesoft.cityclash;

import android.os.Bundle;
import android.util.Log;

import org.json.JSONObject;

public class MainActivity implements Callback {

    Servidor servidor = new Servidor(new JSONObject());
    servidor.();

    @Override
    public void onCreate(Bundle savedInstanceState) {
        servidor.delegate = this;
    }

    public void processFinish(JSONObject joResult){
        Log.i("result", joResult.toString());
    }

    /*
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // abre a tela de login
        Intent intent = new Intent(this, Login.class);
        startActivity(intent);

        final Button button = (Button) findViewById(R.id.btnChamaServidor);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    // constrói parâmetros
                    JSONObject joParams = new JSONObject();
                    joParams.put("test", true);
                    // chama requisição
                    new Servidor("http://192.168.0.12", joParams).execute();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
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

    public void alerta(String stMensagem) {
        new AlertDialog.Builder(this)
                .setTitle("Atenção")
                .setMessage(stMensagem)
                .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {

                    }
                })
                .setIcon(android.R.drawable.ic_dialog_alert)
                .show();
    }
    */

}