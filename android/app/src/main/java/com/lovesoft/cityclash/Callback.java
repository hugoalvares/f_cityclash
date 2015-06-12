package com.lovesoft.cityclash;

import android.os.Bundle;

import org.json.JSONObject;

/**
 * Created by Hugo on 10/06/2015.
 */
public interface Callback {

    public void processFinish(JSONObject joResult);

    public void onCreate(Bundle savedInstanceState);

}
