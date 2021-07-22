// Import dependencies:
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description:
export const okSign = new GestureDescription('ok_sign');

// Thumb:
okSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
okSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
okSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index:
okSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
okSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);
okSign.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);

// Middle, Ring, Pinky:
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    okSign.addCurl(finger, FingerCurl.FullCurl, 0.75);
    okSign.addDirection(finger, FingerDirection.VerticalUp, 0.75);
}
