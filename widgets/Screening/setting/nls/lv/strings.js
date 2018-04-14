///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "feetUnit": "Pēdas/kvadrātpēdas",
    "milesUnit": "Jūdzes/akri",
    "metersUnit": "Metri/kvadrātmetri",
    "kilometersUnit": "Kilometri/kvadrātkilometri",
    "hectaresUnit": "Kilometri/hektāri"
  },
  "analysisTab": {
    "analysisTabLabel": "Analīze",
    "selectAnalysisLayerLabel": "Izvēlēties analīzes slāņus",
    "addLayerLabel": "Pievienot slāņus",
    "noValidLayersForAnalysis": "Izvēlētajā tīmekļa kartē nav atrasti derīgi slāņi.",
    "noValidFieldsForAnalysis": "Izvēlētajā tīmekļa kartē nav atrasti derīgi slāņi. Lūdzu, noņemiet izvēlēto slāni.",
    "addLayersHintText": "Padoms. Izvēlieties slāņus un laukus, kas jāanalizē un jārāda pārskatā",
    "addLayerNameTitle": "Slāņa nosaukums",
    "addFieldsLabel": "Pievienot lauku",
    "addFieldsPopupTitle": "Atlasīt laukus",
    "addFieldsNameTitle": "Lauku nosaukumi",
    "aoiToolsLegendLabel": "Interesējošo teritoriju rīki",
    "aoiToolsDescriptionLabel": "Aktivizēt rīkus, lai veidotu interesējošās teritorijas un norādītu to nosaukumus",
    "placenameLabel": "Vietas nosaukums",
    "drawToolsLabel": "Zīmēšanas rīki",
    "uploadShapeFileLabel": "Augšupielādēt Shape failu",
    "coordinatesLabel": "Koordinātas",
    "coordinatesDrpDwnHintText": "Padoms. Izvēlieties mērvienību ievadīto traversu attēlošanai",
    "coordinatesBearingDrpDwnHintText": "Padoms. Izvēlieties peilējumu ievadīto traversu attēlošanai",
    "allowShapefilesUploadLabel": "Atļaut Shape failu augšupielādi analīzei",
    "allowShapefilesUploadLabelHintText": "Padoms. Iekļaujiet pārskata cilnē opciju Augšupielādēt Shape failu analīzei",
    "allowVisibleLayerAnalysisLabel": "Neanalizēt vai neiekļaut pārskatā neredzamu slāņu rezultātus",
    "allowVisibleLayerAnalysisHintText": "Uzvedne: slāņi, kas ir izslēgti vai nav redzami mēroga redzamības iestatījumu dēļ, netiks analizēti vai iekļauti drukātajos vai lejupielādētajos rezultātos.",
    "areaUnitsLabel": "Rādīt meklēšanas rezultātus šeit:",
    "maxFeatureForAnalysisLabel": "Maks. elementu skaits analīzē",
    "maxFeatureForAnalysisHintText": "Padoms. Iestatiet analīzei maksimālo elementu skaitu",
    "searchToleranceLabelText": "Meklēšanas tolerance",
    "searchToleranceHint": "Padoms. Meklēšanas tolerance tiek izmantota tikai punktu un līniju ievades analīzē",
    "placenameButtonText": "Vietas nosaukums",
    "drawToolsButtonText": "Zīmēt",
    "shapefileButtonText": "Shape fails",
    "coordinatesButtonText": "Koordinātas",
    "invalidLayerErrorMsg": "Konfigurējiet laukus šim objektam:"
  },
  "downloadTab": {
    "downloadLegend": "Lejupielādēt iestatījumus",
    "reportLegend": "Pārskata iestatījumi",
    "downloadTabLabel": "Lejupielādēt",
    "syncEnableOptionLabel": "Elementu slāņi",
    "syncEnableOptionHint": "Padoms. To izmanto elementu informācijas lejupielādei attiecībā uz elementiem, kuri šķērso interesējošo teritoriju norādītajos formātos.",
    "syncEnableOptionNote": "Piezīme. Failu ģeodatubāzes opcijai ir nepieciešami elementu servisi, kuriem ir aktivizēta sinhronizācija.",
    "extractDataTaskOptionLabel": "Ģeoapstrādes serviss Datu izvilkšanas uzdevums",
    "extractDataTaskOptionHint": "Padoms. Izmantojiet publicēto ģeoapstrādes servisu Datu izvilkšanas uzdevums, lai lejupielādētu elementus, kuri šķērso interesējošo teritoriju, failu ģeodatubāzes vai Shape failu formātos.",
    "cannotDownloadOptionLabel": "Deaktivizēt lejupielādi.",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Slāņa nosaukums",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Faila ģeodatubāze",
      "allowDownloadLabel": "Atļaut lejupielādi"
    },
    "setButtonLabel": "Iestatīt",
    "GPTaskLabel": "Norādīt ģeoapstrādes servisa URL",
    "printGPServiceLabel": "Drukas servisa URL",
    "setGPTaskTitle": "Norādīt obligāto ģeoapstrādes servisa URL",
    "logoLabel": "Logotips",
    "logoChooserHint": "Padoms. Noklikšķiniet uz attēla, lai mainītu attēlu",
    "footnoteLabel": "Vēre",
    "columnTitleColorPickerLabel": "Kolonnu virsrakstu krāsa",
    "reportTitleLabel": "Pārskata virsraksts",
    "errorMessages": {
      "invalidGPTaskURL": "Nederīgs ģeoapstrādes serviss. Izvēlieties ģeoapstrādes servisu, kas satur Datu izvilkšanas uzdevumu.",
      "noExtractDataTaskURL": "Izvēlieties jebkādu ģeoapstrādes servisu, kas satur Datu izvilkšanas uzdevumu."
    }
  },
  "generalTab": {
    "generalTabLabel": "Vispārējs",
    "tabLabelsLegend": "Paneļu apzīmējumi",
    "tabLabelsHint": "Padoms. Norādiet apzīmējumus",
    "AOITabLabel": "Interesējošās teritorijas panelis",
    "ReportTabLabel": "Pārskata panelis",
    "bufferSettingsLegend": "Buferzonas iestatījumi",
    "defaultBufferDistanceLabel": "Noklusējuma buferzonas attālums",
    "defaultBufferUnitsLabel": "Buferzonas mērvienības",
    "generalBufferSymbologyHint": "Padoms. Iestatiet simbolus, kas jāizmanto buferzonu attēlošanai definēto interesējošo teritoriju tuvumā",
    "aoiGraphicsSymbologyLegend": "Interesējošo teritoriju grafikas simboli",
    "aoiGraphicsSymbologyHint": "Padoms. Iestatiet simbolus, kas jāizmanto, definējot punktu, līniju, un interesējošās laukumu teritorijas",
    "pointSymbologyLabel": "Punkts",
    "previewLabel": "Priekšskatījums",
    "lineSymbologyLabel": "Līnija",
    "polygonSymbologyLabel": "Laukums",
    "aoiBufferSymbologyLabel": "Buferzonu simboli",
    "pointSymbolChooserPopupTitle": "Adreses vai novietojuma simbols",
    "polygonSymbolChooserPopupTitle": "Izvēlieties laukuma izcelšanas simbolu",
    "lineSymbolChooserPopupTitle": "Izvēlieties laukuma izcelšanas līniju",
    "aoiSymbolChooserPopupTitle": "Iestatīt buferzonas simbolu",
    "aoiTabText": "AOI",
    "reportTabText": "Pārskats",
    "invalidSymbolValue": "Nederīga simbola vērtība."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Meklēšanas avota iestatījumi",
    "searchSourceSettingTitle": "Meklēšanas avota iestatījumi",
    "searchSourceSettingTitleHintText": "Pievienojiet un konfigurējiet ģeokodēšanas pakalpojumus vai elementu slāņus kā meklēšanas avotus. Šie norādītie avoti nosaka, ko var meklēt meklēšanas lodziņā",
    "addSearchSourceLabel": "Pievienot meklēšanas avotu",
    "featureLayerLabel": "Elementu slānis",
    "geocoderLabel": "Ģeokodētājs",
    "generalSettingLabel": "Vispārīgs iestatījums",
    "allPlaceholderLabel": "Viettura teksts visu vērtību meklēšanai:",
    "allPlaceholderHintText": "Mājiens: ievadiet tekstu, kas tiks rādīts kā vietturis, kad meklēsit visus slāņus un ģeokodētāju",
    "generalSettingCheckboxLabel": "Rādīt atrastā elementa vai novietojuma uznirstošo logu",
    "countryCode": "Valsts vai reģiona kods(-i)",
    "countryCodeEg": "piem., ",
    "countryCodeHint": "Ja šī vērtība tiks atstāta tukša, tiks meklētas visas valstis un reģioni.",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Meklēt tikai pašreizējā kartes pārklājumā",
    "zoomScale": "Mērogmaiņas skala",
    "locatorUrl": "Ģeokodētāja URL",
    "locatorName": "Ģeokodētāja nosaukums",
    "locatorExample": "Piemērs",
    "locatorWarning": "Šī ģeokodēšanas pakalpojuma versija netiek atbalstīta. Šis logrīks atbalsta ģeokodēšanas pakalpojuma versiju 10.0 un jaunākas.",
    "locatorTips": "Ieteikumi nav pieejami, jo ģeokodēšanas pakalpojums neatbalsta ieteikšanas iespēju.",
    "layerSource": "Slāņa avots",
    "setLayerSource": "Iestatīt slāņa avotu",
    "setGeocoderURL": "Iestatīt ģeokodētāja vietrādi URL",
    "searchLayerTips": "Ieteikumi nav pieejami, jo elementu pakalpojums neatbalsta lappušu numerācijas iespēju.",
    "placeholder": "Viettura teksts",
    "searchFields": "Meklēšanas lauki",
    "displayField": "Rādīt lauku",
    "exactMatch": "Precīza atbilstība",
    "maxSuggestions": "Ieteikumu maksimums",
    "maxResults": "Maks. rezultātu skaits",
    "enableLocalSearch": "Aktivizēt lokālo meklēšanu",
    "minScale": "Minimālo vērtību mērogs",
    "minScaleHint": "Ja kartes mērogs ir lielāks par šo mērogu, tiks lietota lokālā meklēšana",
    "radius": "Rādiuss",
    "radiusHint": "Norāda tā apgabala rādiusu ap pašreizējo kartes centru, kas tiek izmantots, lai uzlabotu ģeokodēšanas kandidātu rangu un tādējādi vispirms tiktu atgriezti izvietojumam tuvākie kandidāti",
    "setSearchFields": "Iestatīt meklēšanas laukus",
    "set": "Uzstādīt",
    "invalidUrlTip": "URL ${URL} nav derīgs vai tam nevar piekļūt.",
    "invalidSearchSources": "Nederīgi meklēšanas avota iestatījumi"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Lūdzu, aizpildiet obligātos laukus",
    "bufferDistanceFieldsErrorMsg": "Lūdzu, ievadiet derīgas vērtības",
    "invalidSearchToleranceErrorMsg": "Lūdzu, ievadiet derīgu meklēšanas tolerances vērtību",
    "atLeastOneCheckboxCheckedErrorMsg": "Nederīga konfigurācija: ir jānorāda vismaz viens AOI rīks.",
    "noLayerAvailableErrorMsg": "Nav pieejams neviens slānis",
    "layerNotSupportedErrorMsg": "Netiek atbalstīts ",
    "noFieldSelected": "Lūdzu, lietojiet rediģēšanas darbību, lai izvēlētos laukus analīzei.",
    "duplicateFieldsLabels": "Kartes teksta \"${labelText}\" dublikāts pievienots: \"${itemNames}\"",
    "noLayerSelected": "Lūdzu, izvēlieties analīzei vismaz vienu slāni",
    "errorInSelectingLayer": "Nevar pabeigt darbību izvēlētajam slānim. Lūdzu, mēģiniet vēlreiz.",
    "errorInMaxFeatureCount": "Lūdzu, ievadiet analīzei derīgu maksimālo elementu skaitu."
  }
});