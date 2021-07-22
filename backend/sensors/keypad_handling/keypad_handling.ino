#include <Keypad.h>
 
const byte ROWS = 4; //four rows
const byte COLS = 4; //four columns
 
//define the cymbols on the buttons of the keypads
char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

// Pins Keypad:
byte rowPins[ROWS] = {33, 32, 31, 30};
byte colPins[COLS] = {37, 36, 35, 34};
 
//initialize an instance of class NewKeypad
Keypad cKeypad = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS);
 
void setup(){
  Serial.begin(9600);
}
 
void loop(){
  char key = cKeypad.getKey();
  if (key){
        Serial.println(key);
  }
}
