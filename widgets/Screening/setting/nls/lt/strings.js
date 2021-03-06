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
    "feetUnit": "Pėda / kvadratinė pėda",
    "milesUnit": "Mylios / akrai",
    "metersUnit": "Metrai / kvadratiniai metrai",
    "kilometersUnit": "Kilometrai / kvadratiniai kilometrai",
    "hectaresUnit": "Kilometrai / hektarai"
  },
  "analysisTab": {
    "analysisTabLabel": "Analizė",
    "selectAnalysisLayerLabel": "Pasirinkti analizės sluoksnius",
    "addLayerLabel": "Pridėti sluoksnius",
    "noValidLayersForAnalysis": "Pasirinktame internetiniame žemėlapyje nerasta leistinų sluoksnių.",
    "noValidFieldsForAnalysis": "Pasirinktame internetiniame žemėlapyje nerasta leistinų laukų. Pašalinkite pasirinktą sluoksnį.",
    "addLayersHintText": "Pastaba: pasirinkite sluoksnius ir laukus, kuriuos norite analizuoti ir rodyti ataskaitoje",
    "addLayerNameTitle": "Sluoksnio pavadinimas",
    "addFieldsLabel": "Pridėti lauką",
    "addFieldsPopupTitle": "Pasirinkite laukus",
    "addFieldsNameTitle": "Laukų pavadinimai",
    "aoiToolsLegendLabel": "AOI įrankiai",
    "aoiToolsDescriptionLabel": "Įjunkite įrankį, kad sukurtumėte dominančius plotus ir nurodytumėte jų žymes",
    "placenameLabel": "Vietos pavadinimas",
    "drawToolsLabel": "Braižymo įrankiai",
    "uploadShapeFileLabel": "Įkelti Shape failą",
    "coordinatesLabel": "Koordinatės",
    "coordinatesDrpDwnHintText": "Pastaba: pasirinkite vienetą, skirtą rodyti įvestus pravažiavimus",
    "coordinatesBearingDrpDwnHintText": "Pastaba: pasirinkite kryptį, skirtą rodyti įvestus pravažiavimus",
    "allowShapefilesUploadLabel": "Leisti įkelti Shape failus, kad būtų galima analizuoti",
    "allowShapefilesUploadLabelHintText": "Pastaba: ataskaitos skirtuke rodyti Įkelti Shape failus į analizę",
    "allowVisibleLayerAnalysisLabel": "Neanalizuokite ir nepraneškite nematomų sluoksnių rezultatų",
    "allowVisibleLayerAnalysisHintText": "Pastaba: sluoksniai, kurie yra išjungti arba nematomi dėl mastelio matomumo parametrų, nebus analizuojami arba įtraukiami į išspausdintus ar atsisiųstus rezultatus.",
    "areaUnitsLabel": "Rodyti analizės paieškos rezultatus",
    "maxFeatureForAnalysisLabel": "Maks. elementų skaičius skirtas analizei",
    "maxFeatureForAnalysisHintText": "Pastaba: nustatykite maksimalų elementų skaičių analizei",
    "searchToleranceLabelText": "Paieškos spindulys",
    "searchToleranceHint": "Pastaba: paieškos tolerancija naudojama tik analizuojant taško ir linijos įvestis",
    "placenameButtonText": "Vietos pavadinimas",
    "drawToolsButtonText": "Brėžti",
    "shapefileButtonText": "Shape failas",
    "coordinatesButtonText": "Koordinatės",
    "invalidLayerErrorMsg": "Sukonfigūruokite laukus, skirtus"
  },
  "downloadTab": {
    "downloadLegend": "Atsisiuntimo parametrai",
    "reportLegend": "Ataskaitos parametrai",
    "downloadTabLabel": "Atsisiųsti",
    "syncEnableOptionLabel": "Elementų sluoksniai",
    "syncEnableOptionHint": "Pastaba: naudota elementų, kertančių dominantį plotą nurodytais formatais, informacijai atsisiųsti.",
    "syncEnableOptionNote": "Pastaba: failinės geoduomenų bazės parinkčiai reikia sinchronizuoti įgalintas elementų paslaugas.",
    "extractDataTaskOptionLabel": "Duomenų išgavimo geoapdorojimo paslauga",
    "extractDataTaskOptionHint": "Pastaba: naudokite publikuotą Duomenų išgavimo geoapdorojimo paslaugą elementams, kertantiems dominantį plotą, atsisiųsti failinės geoduomenų bazės arba Shape failo formatais.",
    "cannotDownloadOptionLabel": "Išjungti atsisiuntimą",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Sluoksnio pavadinimas",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Failinė geoduomenų bazė",
      "allowDownloadLabel": "Leisti atsisiųsti"
    },
    "setButtonLabel": "Nustatyti",
    "GPTaskLabel": "Nurodykite geoapdorojimo paslaugos URL",
    "printGPServiceLabel": "Spausdinti paslaugos URL",
    "setGPTaskTitle": "Nurodykite reikiamą geoapdorojimo paslaugos URL",
    "logoLabel": "Logotipas",
    "logoChooserHint": "Pastaba: paspauskite vaizdo piktogramą norėdami pakeisti atvaizdą",
    "footnoteLabel": "Išnaša",
    "columnTitleColorPickerLabel": "Stulpelių pavadinimų spalva",
    "reportTitleLabel": "Ataskaitos pavadinimas",
    "errorMessages": {
      "invalidGPTaskURL": "Neleistina geoapdorojimo paslauga. Pasirinkite tokią paslaugą, kurioje yra duomenų išgavimo užduotis.",
      "noExtractDataTaskURL": "Pasirinkite bet kurią geoapdorojimo paslaugą, kurioje yra duomenų išgavimo užduotis."
    }
  },
  "generalTab": {
    "generalTabLabel": "Bendra",
    "tabLabelsLegend": "Skydo žymės",
    "tabLabelsHint": "Pastaba: nurodykite žymes",
    "AOITabLabel": "Dominančio ploto skydas",
    "ReportTabLabel": "Ataskaitos skydas",
    "bufferSettingsLegend": "Buferio parametrai",
    "defaultBufferDistanceLabel": "Numatytasis buferio atstumas",
    "defaultBufferUnitsLabel": "Buferio vienetai",
    "generalBufferSymbologyHint": "Pastaba: nustatykite simbolius, kuriuos naudosite buferiams rodyti aplink numatytąjį dominantį plotą",
    "aoiGraphicsSymbologyLegend": "AOI grafikos simboliai",
    "aoiGraphicsSymbologyHint": "Pastaba: nustatykite simbolius, kuriuos naudosite nurodydami taško, linijos ir poligono dominančius plotus",
    "pointSymbologyLabel": "Taškas",
    "previewLabel": "Peržiūra",
    "lineSymbologyLabel": "Linija",
    "polygonSymbologyLabel": "Poligonas",
    "aoiBufferSymbologyLabel": "Buferio simboliai",
    "pointSymbolChooserPopupTitle": "Adreso arba vietos simbolis",
    "polygonSymbolChooserPopupTitle": "Pasirinkti poligono paryškinimo simbolį",
    "lineSymbolChooserPopupTitle": "Pasirinkti linijos paryškinimo simbolį",
    "aoiSymbolChooserPopupTitle": "Nustatyti buferio simbolį",
    "aoiTabText": "AOI",
    "reportTabText": "Ataskaita",
    "invalidSymbolValue": "Netinkama simbolio reikšmė."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Ieškoti šaltinio parametrų",
    "searchSourceSettingTitle": "Ieškoti šaltinio parametrų",
    "searchSourceSettingTitleHintText": "Pridėti ir sukonfigūruoti geokodavimo paslaugas arba elementų sluoksnius kaip paieškos šaltinius. Šie nurodyti šaltiniai nustato, ko galima ieškoti paieškos lauke",
    "addSearchSourceLabel": "Pridėti paieškos šaltinį",
    "featureLayerLabel": "Elementų sluoksnis",
    "geocoderLabel": "Geokoderis",
    "generalSettingLabel": "Bendrieji parametrai",
    "allPlaceholderLabel": "Vietos rezervavimo tekstas visų elementų paieškai:",
    "allPlaceholderHintText": "Pastaba: įveskite tekstą, kuris bus rodomas kaip vietos rezervavimo ženklas ieškant visų sluoksnių ir geokoderio",
    "generalSettingCheckboxLabel": "Rodyti kontekstinį langą, skirtą rastam elementui arba vietai",
    "countryCode": "Šalies arba regiono kodas (-ai)",
    "countryCodeEg": "pvz., ",
    "countryCodeHint": "Jei ši reikšmė nebus nurodyta, bus ieškomos visos šalys ir regionai",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Ieškoti tik esamo žemėlapio aprėptyje",
    "zoomScale": "Mastelis",
    "locatorUrl": "Geokoderio URL",
    "locatorName": "Geokoderio pavadinimas",
    "locatorExample": "Pavyzdys",
    "locatorWarning": "Ši geokodavimo paslaugos versija nepalaikoma. Valdiklis palaiko 10.0 arba vėlesnę geokodavimo paslaugą.",
    "locatorTips": "Pasiūlymų nėra, nes geokodavimo paslauga nepalaiko pasiūlymų galimybės.",
    "layerSource": "Sluoksnio šaltinis",
    "setLayerSource": "Nustatyti sluoksnio šaltinį",
    "setGeocoderURL": "Nustatyti geokoderio URL",
    "searchLayerTips": "Pasiūlymų nėra, nes elementų paslauga nepalaiko puslapių numeravimo galimybės.",
    "placeholder": "Vartotojui rodomas tekstas",
    "searchFields": "Paieškos laukai",
    "displayField": "Rodyti lauką",
    "exactMatch": "Tikslus atitikmuo",
    "maxSuggestions": "Maksimalūs pasiūlymai",
    "maxResults": "Maksimalus rezultatų skaičius",
    "enableLocalSearch": "Įgalinti vietinę paiešką",
    "minScale": "Minimalus mastelis",
    "minScaleHint": "Vietinė paieška bus taikoma, kai žemėlapio mastelis bus didesnis nei šis",
    "radius": "Spindulys",
    "radiusHint": "Nurodo ploto aplink dabartinį žemėlapio centrą spindulį, naudojamą geokodavimo objektams išdėstyti taip, kad arčiausiai vietos esantys objektai būtų pateikiami pirmiausia.",
    "setSearchFields": "Nustatyti paieškos laukus",
    "set": "Nustatyti",
    "invalidUrlTip": "URL ${URL} yra neteisingas arba nepasiekiamas.",
    "invalidSearchSources": "Netinkami paieškos šaltinio parametrai"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Užpildykite reikiamus laukus",
    "bufferDistanceFieldsErrorMsg": "Įveskite leistinas reikšmes",
    "invalidSearchToleranceErrorMsg": "Įveskite leistiną paieškos tolerancijos reikšmę",
    "atLeastOneCheckboxCheckedErrorMsg": "Netinkama konfigūracija: būtinas bent vienas AOI įrankis.",
    "noLayerAvailableErrorMsg": "Sluoksnių nėra",
    "layerNotSupportedErrorMsg": "Nepalaikoma ",
    "noFieldSelected": "Naudokite redagavimo veiksmą analizės laukams pasirinkti.",
    "duplicateFieldsLabels": "Pridėta pasikartojanti žymė ${labelText} skirta: ${itemNames}",
    "noLayerSelected": "Pasirinkite bent vieną analizės sluoksnį",
    "errorInSelectingLayer": "Negalima užbaigt sluoksnio pasirinkimo operacijos. Bandykite dar kartą.",
    "errorInMaxFeatureCount": "Įveskite leistiną maks. elementų skaičių, skirtą analizei."
  }
});