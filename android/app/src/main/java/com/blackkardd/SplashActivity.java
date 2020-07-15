package com.blackkardd;

import android.content.Intent;
import android.os.Bundle;

//import androidx.appcompat.app.AppCompatActivity; // ← For RN <= 0.59
import androidx.appcompat.app.AppCompatActivity; //  ← For RN >= 0.60

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}