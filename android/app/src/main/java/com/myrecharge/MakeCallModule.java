package com.myrecharge;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

class MakeCallModule extends ReactContextBaseJavaModule {


    MakeCallModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     * from JavaScript.
     */
    @Override
    public String getName() {
        return "MakeCall";
    }


    @ReactMethod
    void dialNumber(@Nonnull String number) {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:" + number + Uri.encode("#")));
            activity.startActivity(intent);
        }
    }

}
