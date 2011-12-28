package bsyg.advIntf.prototype;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class AdvIntfProtoActivity extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        WebView webview;
        webview = (WebView) findViewById(R.id.webview);
        webview.getSettings().setJavaScriptEnabled(true);
        webview.getSettings().setAllowFileAccess(true);
        webview.loadUrl("file:///android_asset/AdvIntfacePrototype/main.html");
    }
}