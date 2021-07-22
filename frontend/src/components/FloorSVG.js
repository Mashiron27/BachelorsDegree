import React from 'react';
import {useState} from 'react';
import './FloorSVG.css';
import $ from 'jquery';

var bigSlice = 0;

const FloorSVG = (props) => {
	
	const senzor1Status = props.senzor1Status || "grey";
	const senzor2Status = props.senzor2Status || "grey";
	const senzor3Status = props.senzor3Status || "grey";
	const senzor4Status = props.senzor4Status || "grey";
	const senzor5Status = props.senzor5Status || "grey";
	const senzor6Status = props.senzor6Status || "grey";
	const senzor7Status = props.senzor7Status || "grey";
	const senzor8Status = props.senzor8Status || "grey";
	const senzor9Status = props.senzor9Status || "grey";
	const senzor10Status = props.senzor10Status || "grey";
	const senzor11Status = props.senzor11Status || "grey";
	const senzor12Status = props.senzor12Status || "grey";
	const senzor13Status = props.senzor13Status || "grey";
	const senzor14Status = props.senzor14Status || "grey";
	const senzor15Status = props.senzor15Status || "grey";

	const senzor1Type = props.senzor1Type || "senzor";
	const senzor2Type = props.senzor2Type || "senzor";
	const senzor3Type = props.senzor3Type || "senzor";
	const senzor4Type = props.senzor4Type || "senzor";
	const senzor5Type = props.senzor5Type || "senzor";
	const senzor6Type = props.senzor6Type || "senzor";
	const senzor7Type = props.senzor7Type || "senzor";
	const senzor8Type = props.senzor8Type || "senzor";
	const senzor9Type = props.senzor9Type || "senzor";
	const senzor10Type = props.senzor10Type || "senzor";
	const senzor11Type = props.senzor11Type || "senzor";
	const senzor12Type = props.senzor12Type || "senzor";
	const senzor13Type = props.senzor13Type || "senzor";
	const senzor14Type = props.senzor14Type || "senzor";
	const senzor15Type = props.senzor15Type || "senzor";

	const senzor1Name = props.senzor1Name || "undefined senzor";
	const senzor2Name = props.senzor2Name || "undefined senzor";
	const senzor3Name = props.senzor3Name || "undefined senzor";
	const senzor4Name = props.senzor4Name || "undefined senzor";
	const senzor5Name = props.senzor5Name || "undefined senzor";
	const senzor6Name = props.senzor6Name || "undefined senzor";
	const senzor7Name = props.senzor7Name || "undefined senzor";
	const senzor8Name = props.senzor8Name || "undefined senzor";
	const senzor9Name = props.senzor9Name || "undefined senzor";
	const senzor10Name = props.senzor10Name || "undefined senzor";
	const senzor11Name = props.senzor11Name || "undefined senzor";
	const senzor12Name = props.senzor12Name || "undefined senzor";
	const senzor13Name = props.senzor13Name || "undefined senzor";
	const senzor14Name = props.senzor14Name || "undefined senzor";
	const senzor15Name = props.senzor15Name || "undefined senzor";

	
	const camera1Status = props.camera1Status || "grey";
	const camera2Status = props.camera2Status || "grey";
	const camera3Status = props.camera3Status || "grey";
	const camera4Status = props.camera4Status || "grey";
	const camera5Status = props.camera5Status || "grey";
	const camera6Status = props.camera6Status || "grey";
	const camera7Status = props.camera7Status || "grey";
	const camera8Status = props.camera8Status || "grey";
	const camera9Status = props.camera9Status || "grey";
	const camera10Status = props.camera10Status || "grey";
	const camera11Status = props.camera11Status || "grey";
	const camera12Status = props.camera12Status || "grey";
	const camera13Status = props.camera13Status || "grey";
	const camera14Status = props.camera14Status || "grey";
	const camera15Status = props.camera15Status || "grey";

	const camera1Type = props.camera1Type || "camera";
	const camera2Type = props.camera2Type || "camera";
	const camera3Type = props.camera3Type || "camera";
	const camera4Type = props.camera4Type || "camera";
	const camera5Type = props.camera5Type || "camera";
	const camera6Type = props.camera6Type || "camera";
	const camera7Type = props.camera7Type || "camera";
	const camera8Type = props.camera8Type || "camera";
	const camera9Type = props.camera9Type || "camera";
	const camera10Type = props.camera10Type || "camera";
	const camera11Type = props.camera11Type || "camera";
	const camera12Type = props.camera12Type || "camera";
	const camera13Type = props.camera13Type || "camera";
	const camera14Type = props.camera14Type || "camera";
	const camera15Type = props.camera15Type || "camera";

	const camera1Name = props.camera1Name || "undefined camera";
	const camera2Name = props.camera2Name || "undefined camera";
	const camera3Name = props.camera3Name || "undefined camera";
	const camera4Name = props.camera4Name || "undefined camera";
	const camera5Name = props.camera5Name || "undefined camera";
	const camera6Name = props.camera6Name || "undefined camera";
	const camera7Name = props.camera7Name || "undefined camera";
	const camera8Name = props.camera8Name || "undefined camera";
	const camera9Name = props.camera9Name || "undefined camera";
	const camera10Name = props.camera10Name || "undefined camera";
	const camera11Name = props.camera11Name || "undefined camera";
	const camera12Name = props.camera12Name || "undefined camera";
	const camera13Name = props.camera13Name || "undefined camera";
	const camera14Name = props.camera14Name || "undefined camera";
	const camera15Name = props.camera15Name || "undefiend camera";

	const [ senzor, setSenzor] = useState(false);

	

	
	
	
$(function() {
	var HoverId;
	var HoverClass;
	var HoverFill;
    var $tooltip = $('.tooltip');	
	
	$('.senzor').hover(function(){
        var t = this.getBoundingClientRect().top - 35,
            l = this.getBoundingClientRect().left;
		$tooltip.css({"top": t + "px", "left": l + "px","display":"block"}).show();		
		$tooltip.text(this.id);	
		HoverId = this.id;	
		HoverClass = $(this).attr('class');
		HoverFill = $(this).attr('fill');
		
	});

	
	
	var $tooltipcamera = $('.tooltip-camera');	
	
	$('.camera').hover(function(){
        var t = this.getBoundingClientRect().top - 35,
            l = this.getBoundingClientRect().left;
		$tooltipcamera.css({"top": t + "px", "left": l + "px","display":"block"}).show();	
		$tooltipcamera.text(this.id);
		HoverId = this.id;
		HoverClass = $(this).attr('class');
		HoverFill = $(this).attr('fill');
	});
  
	
	var $infopanel = $('.info-panel');

    $('path').click(function(e){
        e.preventDefault();
        $infopanel.css({"right": "0","display":"block"}).show();
		$("#InfoTitle").text(HoverId);

		$("#SensorName").text(HoverId);
		$("#SensorType").text(HoverClass);
		if (HoverFill === 'green')
			HoverFill = 'active';
        else if (HoverFill === 'red')
             HoverFill = 'error';
        else HoverFill = 'inactive';
		$("#SensorStatus").text(HoverFill);
	
    });

    $('desc, text').click(function(e){
        e.preventDefault();
    });
});
	
    return (
      
	  <>

<svg id="m" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="821.34" height="539.41" viewBox="0 0 821.34 539.41"><defs></defs>
<path strokeWidth="10px" stroke="#231f20" strokeMiterlimit="10" fill="#231f20" className="cls-1" d="M825.57,13.61l-.91,538M14.22,12.47v538M825.55,18.55,13.34,17.22m.88,528H69.33m755.78,1.31H176.67m-163.94-113H178.89M13.48,359.89H174.82m0,5V311.44m-161.34-64H174.82m0,14.23V232.33m0-94.19v40m-164.6-40H199.11M286,17.87V138.14m-19.08,0h36.45M438,19.74V139.92M589.11,18.58v119.9m-226.67,1.44H519.78M174.16,438.31V398.76m66.51,35.8V545.22M438,434.42v110.8M678,434.56V545.22m8.45-405.3v48.86m-18.67-48.86H825.11m-254.22-1.44h36.44m79.12,101V364.87m0-82.26H821.78M342.59,433.67H543.11m-307.44.62,50.33.27m313.33,0h93.78M746.45,439V364.87m0,40.35h80.67M253.66,379.93h52.6M253.7,193.83H371.63m-116.74-4.76V384.66m127.2-4.73H449M437.15,192.72v69m-18.22-67.91H448.7m71.08-2.52v192M618.3,196v43.47M496.44,193.7H623.33m-129,185.83,125.63.8M516.67,292.19H623.33m-5,51.25v42M437.15,302.16V377.7m0-56.28h82.63m-86-70.16h82.63m101.86,50.9V282.61" transform="translate(-9.22 -12.22)"/>

<path fill = {senzor1Status} id={senzor1Name} className={senzor1Type} d="M561.17,145.89H547.72a4.62,4.62,0,0,1-4.61-4.61V127.83a4.62,4.62,0,0,1,4.61-4.61h13.45a4.62,4.62,0,0,1,4.61,4.61v13.45A4.62,4.62,0,0,1,561.17,145.89Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor2Status} id={senzor2Name} className={senzor2Type} d="M634.67,141.28V127.83a4.62,4.62,0,0,0-4.61-4.61H616.61a4.61,4.61,0,0,0-4.61,4.61v13.45a4.61,4.61,0,0,0,4.61,4.61h13.45A4.62,4.62,0,0,0,634.67,141.28Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor3Status} id={senzor3Name} className={senzor3Type} d="M329.89,141.28V127.83a4.62,4.62,0,0,0-4.61-4.61H311.83a4.62,4.62,0,0,0-4.61,4.61v13.45a4.62,4.62,0,0,0,4.61,4.61h13.45A4.62,4.62,0,0,0,329.89,141.28Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor4Status} id={senzor4Name} className={senzor4Type} d="M262.07,141.28V127.83a4.61,4.61,0,0,0-4.61-4.61H244a4.61,4.61,0,0,0-4.61,4.61v13.45a4.61,4.61,0,0,0,4.61,4.61h13.44A4.61,4.61,0,0,0,262.07,141.28Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor5Status} id={senzor5Name} className={senzor5Type} d="M181.48,222.11V208.66a4.6,4.6,0,0,0-4.61-4.61H163.43a4.61,4.61,0,0,0-4.62,4.61v13.45a4.62,4.62,0,0,0,4.62,4.61h13.44A4.61,4.61,0,0,0,181.48,222.11Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor6Status} id={senzor6Name} className={senzor6Type} d="M181.48,286.24V272.8a4.6,4.6,0,0,0-4.61-4.61H163.43a4.61,4.61,0,0,0-4.62,4.61v13.44a4.61,4.61,0,0,0,4.62,4.61h13.44A4.6,4.6,0,0,0,181.48,286.24Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor7Status} id={senzor7Name} className={senzor7Type} d="M623.33,274.91V261.46a4.61,4.61,0,0,0-4.61-4.61H605.28a4.61,4.61,0,0,0-4.61,4.61v13.45a4.61,4.61,0,0,0,4.61,4.61h13.44A4.61,4.61,0,0,0,623.33,274.91Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor8Status} id={senzor8Name} className={senzor8Type} d="M623.33,325V311.54a4.61,4.61,0,0,0-4.61-4.61H605.28a4.61,4.61,0,0,0-4.61,4.61V325a4.6,4.6,0,0,0,4.61,4.61h13.44A4.6,4.6,0,0,0,623.33,325Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor9Status} id={senzor9Name} className={senzor9Type} d="M452.44,289.63V276.19a4.6,4.6,0,0,0-4.61-4.61H434.39a4.6,4.6,0,0,0-4.61,4.61v13.44a4.6,4.6,0,0,0,4.61,4.61h13.44A4.6,4.6,0,0,0,452.44,289.63Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor10Status} id={senzor10Name} className={senzor10Type} d="M704.15,210.77V197.33a4.61,4.61,0,0,0-4.61-4.61H686.09a4.61,4.61,0,0,0-4.61,4.61v13.44a4.61,4.61,0,0,0,4.61,4.61h13.45A4.61,4.61,0,0,0,704.15,210.77Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor11Status} id={senzor11Name} className={senzor11Type} d="M737.33,371.6V358.15a4.61,4.61,0,0,0-4.61-4.61H719.28a4.61,4.61,0,0,0-4.61,4.61V371.6a4.61,4.61,0,0,0,4.61,4.61h13.44A4.61,4.61,0,0,0,737.33,371.6Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor12Status} id={senzor12Name} className={senzor12Type} d="M737.33,445.72V432.28a4.6,4.6,0,0,0-4.61-4.61H719.28a4.6,4.6,0,0,0-4.61,4.61v13.44a4.6,4.6,0,0,0,4.61,4.61h13.44A4.6,4.6,0,0,0,737.33,445.72Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor13Status} id={senzor13Name} className={senzor13Type} d="M595.7,448.32V434.88a4.6,4.6,0,0,0-4.61-4.61H577.65a4.6,4.6,0,0,0-4.61,4.61v13.44a4.6,4.6,0,0,0,4.61,4.61h13.44A4.6,4.6,0,0,0,595.7,448.32Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor14Status} id={senzor14Name} className={senzor14Type} d="M314.7,448.32V434.88a4.6,4.6,0,0,0-4.61-4.61H296.64a4.61,4.61,0,0,0-4.61,4.61v13.44a4.61,4.61,0,0,0,4.61,4.61h13.45A4.6,4.6,0,0,0,314.7,448.32Z" transform="translate(-9.22 -12.22)"/>
<path fill = {senzor15Status} id={senzor15Name} className={senzor15Type} d="M94.52,529.28V515.83a4.61,4.61,0,0,0-4.61-4.61H76.47a4.61,4.61,0,0,0-4.61,4.61v13.45a4.61,4.61,0,0,0,4.61,4.61H89.91A4.61,4.61,0,0,0,94.52,529.28Z" transform="translate(-9.22 -12.22)"/>

<path fill = {camera1Status} id={camera1Name} className={camera1Type} d="M44.83,44v-7.8a6.67,6.67,0,0,0-6.67-6.67h-7.8a6.67,6.67,0,0,0-6.67,6.67V44a6.67,6.67,0,0,0,6.67,6.67h7.8A6.67,6.67,0,0,0,44.83,44Zm-7.12-5.83,12.36-5a2.08,2.08,0,0,1,2.85,1.93c-.62,2,2,13.56-2.85,11.87L37.71,42A2.08,2.08,0,0,1,37.71,38.12Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera2Status} id={camera2Name} className={camera2Type} d="M44.83,164.79V157a6.67,6.67,0,0,0-6.67-6.66h-7.8A6.67,6.67,0,0,0,23.69,157v7.8a6.67,6.67,0,0,0,6.67,6.67h7.8A6.67,6.67,0,0,0,44.83,164.79ZM37.71,159l12.36-5a2.08,2.08,0,0,1,2.85,1.94c-.62,2,2,13.55-2.85,11.86l-12.36-5A2.08,2.08,0,0,1,37.71,159Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera3Status} id={camera3Name} className={camera3Type} d="M46.81,336v-7.8a6.67,6.67,0,0,0-6.66-6.67h-7.8a6.67,6.67,0,0,0-6.67,6.67V336a6.67,6.67,0,0,0,6.67,6.67h7.8A6.67,6.67,0,0,0,46.81,336Zm-7.12-5.83,12.36-5a2.08,2.08,0,0,1,2.86,1.93c-.63,2,2,13.56-2.86,11.87l-12.36-5A2.08,2.08,0,0,1,39.69,330.2Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera4Status} id={camera4Name} className={camera4Type} d="M473.58,44v-7.8a6.67,6.67,0,0,0-6.67-6.67h-7.8a6.67,6.67,0,0,0-6.67,6.67V44a6.67,6.67,0,0,0,6.67,6.67h7.8A6.67,6.67,0,0,0,473.58,44Zm-7.12-5.83,12.36-5a2.08,2.08,0,0,1,2.85,1.93c-.62,2,2,13.56-2.85,11.87l-12.36-5A2.08,2.08,0,0,1,466.46,38.12Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera5Status} id={camera5Name} className={camera5Type} d="M286.4,219.28v-7.8a6.67,6.67,0,0,0-6.67-6.66h-7.8a6.66,6.66,0,0,0-6.66,6.66v7.8a6.67,6.67,0,0,0,6.66,6.67h7.8A6.67,6.67,0,0,0,286.4,219.28Zm-7.12-5.83,12.36-5a2.09,2.09,0,0,1,2.86,1.94c-.63,2,2,13.55-2.86,11.86l-12.36-5A2.08,2.08,0,0,1,279.28,213.45Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera6Status} id={camera6Name} className={camera6Type} d="M44.83,458.74v-7.8a6.67,6.67,0,0,0-6.67-6.67h-7.8a6.67,6.67,0,0,0-6.67,6.67v7.8a6.67,6.67,0,0,0,6.67,6.67h7.8A6.67,6.67,0,0,0,44.83,458.74Zm-7.12-5.83,12.36-5a2.08,2.08,0,0,1,2.85,1.93c-.62,2,2,13.56-2.85,11.87l-12.36-5A2.08,2.08,0,0,1,37.71,452.91Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera7Status} id={camera7Name} className={camera7Type} d="M792.31,36.15V44A6.67,6.67,0,0,0,799,50.62h7.8A6.67,6.67,0,0,0,813.44,44v-7.8a6.67,6.67,0,0,0-6.66-6.67H799A6.67,6.67,0,0,0,792.31,36.15ZM799.43,42l-12.36,5c-4.86,1.69-2.23-9.86-2.86-11.87a2.08,2.08,0,0,1,2.86-1.93l12.36,5A2.08,2.08,0,0,1,799.43,42Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera8Status} id={camera8Name} className={camera8Type} d="M794.3,157v7.8a6.67,6.67,0,0,0,6.66,6.67h7.8a6.67,6.67,0,0,0,6.67-6.67V157a6.67,6.67,0,0,0-6.67-6.66H801A6.66,6.66,0,0,0,794.3,157Zm7.12,5.83-12.36,5c-4.86,1.69-2.23-9.86-2.86-11.86a2.08,2.08,0,0,1,2.86-1.94l12.36,5A2.08,2.08,0,0,1,801.42,162.82Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera9Status} id={camera9Name} className={camera9Type} d="M794.3,298.26v7.8a6.67,6.67,0,0,0,6.66,6.67h7.8a6.67,6.67,0,0,0,6.67-6.67v-7.8a6.67,6.67,0,0,0-6.67-6.67H801A6.67,6.67,0,0,0,794.3,298.26Zm7.12,5.83-12.36,5c-4.86,1.69-2.23-9.86-2.86-11.87a2.08,2.08,0,0,1,2.86-1.93l12.36,5A2.08,2.08,0,0,1,801.42,304.09Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera10Status} id={camera10Name} className={camera10Type} d="M787.94,521.28v7.8a6.67,6.67,0,0,0,6.67,6.66h7.8a6.66,6.66,0,0,0,6.66-6.66v-7.8a6.67,6.67,0,0,0-6.66-6.67h-7.8A6.67,6.67,0,0,0,787.94,521.28Zm7.12,5.83-12.36,5c-4.85,1.69-2.23-9.86-2.86-11.87a2.08,2.08,0,0,1,2.86-1.93l12.36,5A2.08,2.08,0,0,1,795.06,527.11Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera11Status} id={camera11Name} className={camera11Type} d="M399.81,521.28v7.8a6.67,6.67,0,0,0,6.67,6.66h7.8a6.66,6.66,0,0,0,6.66-6.66v-7.8a6.67,6.67,0,0,0-6.66-6.67h-7.8A6.67,6.67,0,0,0,399.81,521.28Zm7.12,5.83-12.36,5c-4.85,1.69-2.23-9.86-2.86-11.87a2.09,2.09,0,0,1,2.86-1.93l12.36,5A2.08,2.08,0,0,1,406.93,527.11Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera12Status} id={camera12Name} className={camera12Type} d="M549.55,219.28v-7.8a6.67,6.67,0,0,0-6.67-6.66h-7.8a6.66,6.66,0,0,0-6.66,6.66v7.8a6.67,6.67,0,0,0,6.66,6.67h7.8A6.67,6.67,0,0,0,549.55,219.28Zm-7.12-5.83,12.36-5a2.08,2.08,0,0,1,2.86,1.94c-.63,2,2,13.55-2.86,11.86l-12.36-5A2.08,2.08,0,0,1,542.43,213.45Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera13Status} id={camera13Name} className={camera13Type} d="M549.55,363.78V356a6.67,6.67,0,0,0-6.67-6.66h-7.8a6.66,6.66,0,0,0-6.66,6.66v7.8a6.67,6.67,0,0,0,6.66,6.67h7.8A6.67,6.67,0,0,0,549.55,363.78ZM542.43,358l12.36-5a2.08,2.08,0,0,1,2.86,1.93c-.63,2,2,13.56-2.86,11.87l-12.36-5A2.08,2.08,0,0,1,542.43,358Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera14Status} id={camera14Name} className={camera14Type} d="M471.59,529.67v-7.8a6.66,6.66,0,0,0-6.67-6.66h-7.8a6.66,6.66,0,0,0-6.66,6.66v7.8a6.67,6.67,0,0,0,6.66,6.67h7.8A6.67,6.67,0,0,0,471.59,529.67Zm-7.12-5.83,12.36-5a2.08,2.08,0,0,1,2.86,1.94c-.63,2,2,13.55-2.86,11.86l-12.36-5A2.08,2.08,0,0,1,464.47,523.84Z" transform="translate(-9.22 -12.22)"/>
<path fill = {camera15Status} id={camera15Name} className={camera15Type} d="M401.8,36.16V44a6.66,6.66,0,0,0,6.67,6.66h7.79A6.66,6.66,0,0,0,422.93,44v-7.8a6.67,6.67,0,0,0-6.67-6.67h-7.79A6.67,6.67,0,0,0,401.8,36.16ZM408.92,42l-12.36,5c-4.86,1.68-2.23-9.86-2.86-11.87a2.08,2.08,0,0,1,2.86-1.93l12.36,5A2.08,2.08,0,0,1,408.92,42Z" transform="translate(-9.22 -12.22)"/>


</svg>

<div className="tooltip">Senzor</div>
<div className="tooltip-camera">Camera</div>
	
	  </>
	  
    )

	
}

export default FloorSVG

	

