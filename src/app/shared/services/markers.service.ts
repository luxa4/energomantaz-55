import {Injectable} from '@angular/core';

export interface Marker {
  options: {
    lat:number,
    lng: number
  },
  text:string
}

@Injectable()
export class MarkersService {

  markers:Marker[] = [
    {options: {lat: 59.968398, lng: 30.494965}, text:'Реконструкция КЛ 6 кВ (ф.24-41 - 7615), протяженностью 3 км для Правобережного РЭС ПАО «Ленэнерго»'},
    {options: {lat:59.971551,  lng: 30.449726}, text:'Реконструкция  БКТП №7588, строительство кабельного киоска и КЛ-0,4 кВ, заявитель: ООО «Универсал-4»'},
    {options: {lat:59.929362,  lng: 30.349600}, text:'Строительство КЛ 0,4 кВ с установкой нового кабельного киоска, заявитель: ООО "СБС-СЕРВИС"'},
    {options: {lat:59.970069,  lng: 30.339260}, text:'Строительство нового кабельного киоска взамен существующего кабельного киоска №1776, заявитель: ГУП «ТЭК СПб»'},
    {options: {lat:59.981721,  lng: 30.408610}, text:'Строительство КЛ-0,4 кВ, заявитель: ООО «Вереск-А» (строительный магазин)'},
    {options: {lat:59.965021,  lng: 30.375292}, text:'Прокладка КЛ, заявитель: ООО «Вертикаль»'},
    {options: {lat:59.941484,  lng: 30.363398}, text:'Прокладка КЛ, заявитель: ООО «ПК»'},
    {options: {lat:59.947392,  lng: 30.410739}, text:'Строительство КЛ 0,4 кВ с установкой нового кабельного киоска, заявитель: УМВД РФ по Красногвардейскому району г. Санкт-Петербурга'},
    {options: {lat:59.840198,  lng: 30.170745}, text:'Вынос сетей из под пятна застройки. Общеразвивающее дошкольное обшеобразовательное учреждение на 220 мест'},
    {options: {lat:59.935205,  lng: 30.439692}, text:'Реконструкция БКТП №17412, заявитель: ООО «Оутдор Медиа Менеджмент»'},
    {options: {lat:59.901008,  lng: 30.464180}, text:'Реконструкция БКТП №13501, строительство нового кабельного киоска, КЛ 0,4 кВ, заявитель: ООО «Вилия»'},
    {options: {lat:59.951434,  lng: 30.410110}, text:'Ремонт поврежденной КЛ 10 кВ для ООО «Сотэкс»'},
    {options: {lat:59.918241,  lng: 30.442980}, text:'Создание временной схемы электроснабжения здания детской поликлиники (прокладка КЛ 0,4 кВ) для СПбГКУ «Фонд капитального строительства и реконструкции»'},
    {options: {lat:59.929362,  lng: 30.349600}, text:'Строительство КЛ 0,4 кВ с установкой нового кабельного киоска, заявитель: ООО «СБС-СЕРВИС»'},
    {options: {lat:59.965309,  lng: 30.345036}, text:'Прокладка КЛ, заявитель: ООО «Виктория»'},
    {options: {lat:59.965237,  lng: 30.435847}, text:'Строительство кабельного киоска и КЛ-0,4 кВ, заявитель: ООО «Арго»'},
    {options: {lat:59.971283,  lng: 30.348709}, text:'Строительство нового кабельного киоска и КЛ-0,4 кВ, заявитель: ООО «Линк Девелопмент»'},
    {options: {lat:59.743948,  lng: 30.647275}, text:'Прокладка КЛ, заявитель:  ООО «Линк Девелопмент»'},
    {options: {lat:59.983283,  lng: 30.354011}, text:'Строительство нового кабельного киоска и КЛ-0,4 кВ, заявитель: ООО «Линк Девелопмент»'},
  ]

  markerOffice:Marker = {
    options: {lat:60.074594,  lng: 30.353822},
    text:'Наш офис'
  }
}
