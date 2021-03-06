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
    "feetUnit": "Футы / Квадратные футы",
    "milesUnit": "Мили / Акры",
    "metersUnit": "Метры / Квадратные метры",
    "kilometersUnit": "Километры / Квадратные километры",
    "hectaresUnit": "Километры / Гектары"
  },
  "analysisTab": {
    "analysisTabLabel": "Анализ",
    "selectAnalysisLayerLabel": "Выберите слои анализа",
    "addLayerLabel": "Добавить слои",
    "noValidLayersForAnalysis": "В выбранной веб-карте отсутствуют корректные слои.",
    "noValidFieldsForAnalysis": "В выбранной веб-карте отсутствуют корректные слои. Удалите выбранный слой.",
    "addLayersHintText": "Подсказка: выбраны слои и поля для анализа и отображения в отчете",
    "addLayerNameTitle": "Имя слоя",
    "addFieldsLabel": "Добавить поле",
    "addFieldsPopupTitle": "Выбрать поля",
    "addFieldsNameTitle": "Имена полей",
    "aoiToolsLegendLabel": "Инструменты Область интереса (AOI)",
    "aoiToolsDescriptionLabel": "Активирует инструменты для создания областей интереса и подписей к ним",
    "placenameLabel": "Название места",
    "drawToolsLabel": "Инструменты рисования",
    "uploadShapeFileLabel": "Загрузить шейп-файл",
    "coordinatesLabel": "Координаты",
    "coordinatesDrpDwnHintText": "Подсказка: выберите единицы для отображения теодолитных ходов",
    "coordinatesBearingDrpDwnHintText": "Подсказка: выберите направление для отображения теодолитных ходов",
    "allowShapefilesUploadLabel": "Позволяет загружать шейп-файлы для анализа",
    "allowShapefilesUploadLabelHintText": "Подсказка: отобразить 'Загрузить шейп-файл для включения в анализ' на вкладке отчета",
    "allowVisibleLayerAnalysisLabel": "Не анализировать и не делать отчеты о результатах для не видимых слоев",
    "allowVisibleLayerAnalysisHintText": "Подсказка: Слои, которые выключены или не видимы из-за настроек масштаба видимости, не будут анализироваться или включаться в печатные или загружаемые результаты.",
    "areaUnitsLabel": "Показать результаты анализа в",
    "maxFeatureForAnalysisLabel": "Максимальное число объектов для анализа",
    "maxFeatureForAnalysisHintText": "Подсказка: укажите максимальное число объектов для анализа",
    "searchToleranceLabelText": "Допуск поиска",
    "searchToleranceHint": "Подсказка: допуск поиска используется только при анализа точек и линий.",
    "placenameButtonText": "Название места",
    "drawToolsButtonText": "Нарисовать",
    "shapefileButtonText": "Шейп-файл",
    "coordinatesButtonText": "Координаты",
    "invalidLayerErrorMsg": "Настройте поля для"
  },
  "downloadTab": {
    "downloadLegend": "Настройки загрузки",
    "reportLegend": "Настройки отчета",
    "downloadTabLabel": "Загрузка",
    "syncEnableOptionLabel": "Векторные слои",
    "syncEnableOptionHint": "Подсказка: используется для загрузки информации об объектах в областях интереса в указанных форматах.",
    "syncEnableOptionNote": "Примечание: сервисы объектов с включенной синхронизацией необходимы для Файловой базы геоданных.",
    "extractDataTaskOptionLabel": "Сервис геообработки Extract Data Task",
    "extractDataTaskOptionHint": "Подсказка: используйте опубликованный сервис геообработки Extract Data Task для загрузки объектов в области интереса в форматах шейп-файл или файловая база геоданных.",
    "cannotDownloadOptionLabel": "Отключить загрузку",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Имя слоя",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Файловая база геоданных",
      "allowDownloadLabel": "Разрешить загрузку"
    },
    "setButtonLabel": "Установить",
    "GPTaskLabel": "Указать URL для сервиса геообработки",
    "printGPServiceLabel": "URL-адрес сервиса печати",
    "setGPTaskTitle": "Указать требуемый URL для сервиса геообработки",
    "logoLabel": "Логотип",
    "logoChooserHint": "Подсказка: щелкните на значке изображения для смены изображения",
    "footnoteLabel": "Сноска",
    "columnTitleColorPickerLabel": "Цвет заголовка столбца",
    "reportTitleLabel": "Заголовок отчета",
    "errorMessages": {
      "invalidGPTaskURL": "Недопустимый сервис геообработки. Выберите сервис геообработки, содержащий Extract Data Task.",
      "noExtractDataTaskURL": "Выберите любой сервис геообработки, содержащий Extract Data Task."
    }
  },
  "generalTab": {
    "generalTabLabel": "Общие",
    "tabLabelsLegend": "Подписи панели",
    "tabLabelsHint": "Подсказка: укажите подписи",
    "AOITabLabel": "Панель Область интереса",
    "ReportTabLabel": "Панель отчета",
    "bufferSettingsLegend": "Параметры буфера",
    "defaultBufferDistanceLabel": "Буферное расстояние по умолчанию",
    "defaultBufferUnitsLabel": "Единицы измерения буфера",
    "generalBufferSymbologyHint": "Подсказка: определите символы для отображения буферных областей вокруг области интереса",
    "aoiGraphicsSymbologyLegend": "Графические символы AOI",
    "aoiGraphicsSymbologyHint": "Подсказка: определите символы, используемые при указании точечных, линейных или полигональных областей интереса",
    "pointSymbologyLabel": "Точка",
    "previewLabel": "Предварительный просмотр",
    "lineSymbologyLabel": "Линия",
    "polygonSymbologyLabel": "Полигон",
    "aoiBufferSymbologyLabel": "Символы буферов",
    "pointSymbolChooserPopupTitle": "Символ адреса или местоположения",
    "polygonSymbolChooserPopupTitle": "Выбрать символ для выделения полигона",
    "lineSymbolChooserPopupTitle": "Выбрать символ для выделения линии",
    "aoiSymbolChooserPopupTitle": "Задать символ буфера",
    "aoiTabText": "AOI",
    "reportTabText": "Отчет",
    "invalidSymbolValue": "Недопустимое значение символа."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Параметры источника поиска",
    "searchSourceSettingTitle": "Параметры источника поиска",
    "searchSourceSettingTitleHintText": "Добавить и настроить сервисы геокодирования или векторные слои в качестве источников для поиска. Эти указанные источники определяют, что будет доступно для поиска в соответствующем диалоговом окне",
    "addSearchSourceLabel": "Добавить источник поиска",
    "featureLayerLabel": "Векторный слой",
    "geocoderLabel": "Геокодер",
    "generalSettingLabel": "Общие параметры",
    "allPlaceholderLabel": "Замещающий текст для поиска всего:",
    "allPlaceholderHintText": "Подсказка: Введите текст, который будет показан как текст-заполнитель во время поиска по всем слоям и геокодерам.",
    "generalSettingCheckboxLabel": "Показать всплывающее окно для найденного объекта или местоположения",
    "countryCode": "Коды стран или регионов",
    "countryCodeEg": "например ",
    "countryCodeHint": "Не заполняйте, чтобы искать по всем странам и регионам",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Искать только в пределах текущего экстента карты",
    "zoomScale": "Масштаб",
    "locatorUrl": "URL-адрес геокодера",
    "locatorName": "Имя геокодера",
    "locatorExample": "Пример:",
    "locatorWarning": "Эта версия сервиса геокодирования не поддерживается. Виджет поддерживает сервис геокодирования версии 10.0 и более новые.",
    "locatorTips": "Нет предположений, так как сервис геокодирования не поддерживает возможность предположений.",
    "layerSource": "Источник слоя",
    "setLayerSource": "Установить источник слоя",
    "setGeocoderURL": "Задать URL геокодера",
    "searchLayerTips": "Нет предположений, так как сервис пространственных объектов не поддерживает возможность пагинации.",
    "placeholder": "Замещающий текст",
    "searchFields": "Поля поиска",
    "displayField": "Показать поле",
    "exactMatch": "Точное совпадение",
    "maxSuggestions": "Максимум предложений",
    "maxResults": "Максимум результатов",
    "enableLocalSearch": "Включить локальный поиск",
    "minScale": "Мин. масштаб",
    "minScaleHint": "Когда масштаб карты крупнее данного масштаба, применяется локальный поиск",
    "radius": "Радиус",
    "radiusHint": "Укажите радиус области вокруг текущего центра карты. Он будет использоваться для повышения ранга кандидатов геокодирования так, чтобы первыми возвращались кандидаты, расположенные ближе всего",
    "setSearchFields": "Установить поля для поиска",
    "set": "Установить",
    "invalidUrlTip": "URL ${URL} является недопустимым или недостижимым.",
    "invalidSearchSources": "Некорректные параметры поиска источника"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Пожалуйста, заполните все обязательные поля",
    "bufferDistanceFieldsErrorMsg": "Введите корректные значения",
    "invalidSearchToleranceErrorMsg": "Введите корректное значение допуска поиска",
    "atLeastOneCheckboxCheckedErrorMsg": "Некорректная конфигурация: Необходим хотя бы один инструмент AOI.",
    "noLayerAvailableErrorMsg": "Нет доступных слоев",
    "layerNotSupportedErrorMsg": "Не поддерживается ",
    "noFieldSelected": "Используйте действие Редактирование для выбора поля анализа.",
    "duplicateFieldsLabels": "Дублировать подпись \"${labelText}\" добавленную для : \"${itemNames}\"",
    "noLayerSelected": "Пожалуйста, выберите хотя бы один слой для анализа",
    "errorInSelectingLayer": "Невозможно завершить операцию выбора слоя. Попробуйте еще раз.",
    "errorInMaxFeatureCount": "Введите корректное значение максимального числа объектов для анализа."
  }
});