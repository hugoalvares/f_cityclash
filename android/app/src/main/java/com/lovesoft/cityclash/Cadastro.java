package com.lovesoft.cityclash;

import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;


public class Cadastro extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro);

        // click botão cadastrar
        final Button btnCadastrar = (Button) findViewById(R.id.btnCadastrar);
        btnCadastrar.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    // pega valores dos campos
                    EditText edtEmail = (EditText) findViewById(R.id.edtEmail);
                    String stEmail = edtEmail.getText().toString();
                    EditText edtApelido = (EditText)findViewById(R.id.edtApelido);
                    String stApelido = edtApelido.getText().toString();
                    EditText edtSenha1 = (EditText) findViewById(R.id.edtSenha1);
                    String stSenha1 = edtSenha1.getText().toString();
                    EditText edtSenha2 = (EditText)findViewById(R.id.edtSenha2);
                    String stSenha2 = edtSenha2.getText().toString();

                    // chama função de cadastro
                    Regras.cadastro(stEmail, stApelido, stSenha1, stSenha2);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_cadastro, menu);
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
}
