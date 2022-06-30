#include <FirebaseESP32.h>
#include <DHT.h>
#include  <WiFi.h>
#include <WiFiClient.h>

#define FIREBASE_HOST "https://testbutton-cd73e-default-rtdb.asia-southeast1.firebasedatabase.app/"
#define FIREBASE_AUTH "2pN3gg8k95DVuRPu1qdXEVHS9ugybSFIHy7ibBg7"
#define WIFI_SSID "LONGAN" // Thay đổi tên wifi của bạn
#define WIFI_PASSWORD "freewifi" // Thay đổi password wifi của bạn
#define DHTPIN 14    // Chân dữ liệu của DHT 11 , với NodeMCU chân D5 GPIO là 14
#define DHTTYPE DHT11   // DHT 11


DHT dht(DHTPIN, DHTTYPE);
FirebaseData fbdo;

void setup() {

  Serial.begin(9600);
  delay(1000);
  pinMode(2, OUTPUT);
  WiFi.begin (WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Dang ket noi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  dht.begin();
  Serial.println ("");
  Serial.println ("Da ket noi WiFi!");
  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

void loop() {

  float h = dht.readHumidity();
  float t = dht.readTemperature();  // Đọc nhiệt độ theo độ C

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;

  }

  Serial.print("Nhiet do: ");
  Serial.print(t);
  Serial.print("*C  ");
  Serial.print("Do am: ");
  Serial.print(h);
  Serial.println("%  ");

  Firebase.setFloat( fbdo,"Nhiet do", t);

  Firebase.setFloat ( fbdo,"Do am", h);

  delay(200);


Firebase.RTDB.getInt(&fbdo, "/lock");

int read_data = fbdo.intData();

if (read_data) 
  digitalWrite(2,1);
  else digitalWrite(2,0);

Serial.print("Data received: ");

Serial.println(read_data); //print the data received from the Firebase database

}
