#define Led_Keypad_Red 22
#define Led_Keypad_Green 23
#define Led_Fingerprint_Red 24
#define Led_Fingerprint_Green 25
#define Led_Rfid_Red 26
#define Led_Rfid_Green 27

void setup() {
  // Leds:
  pinMode(Led_Keypad_Red, OUTPUT);
  pinMode(Led_Keypad_Green, OUTPUT);
  pinMode(Led_Fingerprint_Red, OUTPUT);
  pinMode(Led_Fingerprint_Green, OUTPUT);
  pinMode(Led_Rfid_Red, OUTPUT);
  pinMode(Led_Rfid_Green, OUTPUT);
}

void loop() {
  digitalWrite(Led_Rfid_Red , LOW);
  digitalWrite(Led_Keypad_Green , HIGH);
  delay(1000);
  digitalWrite(Led_Keypad_Green , LOW);
  digitalWrite(Led_Keypad_Red , HIGH);
  delay(1000);
  digitalWrite(Led_Keypad_Red , LOW);
  digitalWrite(Led_Fingerprint_Green , HIGH);
  delay(1000);
  digitalWrite(Led_Fingerprint_Green , LOW);
  digitalWrite(Led_Fingerprint_Red , HIGH);
  delay(1000);
  digitalWrite(Led_Fingerprint_Red , LOW);
  digitalWrite(Led_Rfid_Green , HIGH);
  delay(1000);
  digitalWrite(Led_Rfid_Green , LOW);
  digitalWrite(Led_Rfid_Red , HIGH);
  delay(1000);
}
