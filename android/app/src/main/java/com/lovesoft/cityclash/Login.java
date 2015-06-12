package com.lovesoft.cityclash;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import org.json.JSONException;
import org.json.JSONObject;


public class Login extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // click botão login
        final Button btnLogin = (Button) findViewById(R.id.btnLogin);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    // pega valores dos campos
                    EditText edtEmail = (EditText) findViewById(R.id.edtEmail);
                    String stEmail = edtEmail.getText().toString();
                    EditText edtSenha = (EditText)findViewById(R.id.edtSenha);
                    String stSenha = edtSenha.getText().toString();

                    if (stEmail.equals("")) {
                        alerta("Informe o e-mail.");
                    } else if (stSenha.equals("")) {
                        alerta("Informe a senha.");
                    } else {
                        // chama função de login
                        Regras.login(Login.this, stEmail, stSenha);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });

        // click botão cadastrar
        final Button btnCadastrar = (Button) findViewById(R.id.btnCadastrar);
        btnCadastrar.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    Intent intent = new Intent(Login.this, Cadastro.class);
                    startActivity(intent);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_login, menu);
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
}
