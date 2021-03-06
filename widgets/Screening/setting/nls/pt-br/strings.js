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
    "feetUnit": "Pés / Pés Quadrados",
    "milesUnit": "Milhas / Acres",
    "metersUnit": "Metros / Metros Quadrados",
    "kilometersUnit": "Quilômetros / Quilômetros Quadrados",
    "hectaresUnit": "Quilômetros / Hectares"
  },
  "analysisTab": {
    "analysisTabLabel": "Análise",
    "selectAnalysisLayerLabel": "Selecionar camadas de análise",
    "addLayerLabel": "Adicionar Camadas",
    "noValidLayersForAnalysis": "Nenhuma camada válida localizada no webmap selecionado.",
    "noValidFieldsForAnalysis": "Nenhum campo válido localizado no webmap selecionado. Remova a camada selecionada.",
    "addLayersHintText": "Sugestão: Selecione as camadas e campos para analisar e exibir no relatório",
    "addLayerNameTitle": "Nome da Camada",
    "addFieldsLabel": "Adicionar Campo",
    "addFieldsPopupTitle": "Selecionar Campos",
    "addFieldsNameTitle": "Nomes de Campo",
    "aoiToolsLegendLabel": "Ferramentas AOI",
    "aoiToolsDescriptionLabel": "Habilite as ferramentas para criar áreas de interesse e especifique seus rótulos",
    "placenameLabel": "Nome do local",
    "drawToolsLabel": "Ferramentas de Desenho",
    "uploadShapeFileLabel": "Transferir um Shapefile",
    "coordinatesLabel": "Coordenadas",
    "coordinatesDrpDwnHintText": "Sugestão: Selecione a unidade para exibir as transversais inseridas",
    "coordinatesBearingDrpDwnHintText": "Sugestão: Selecione a direção para exibir as transversais inseridas",
    "allowShapefilesUploadLabel": "Permitir transferências de shapefiles para análise",
    "allowShapefilesUploadLabelHintText": "Sugestão: Exibe 'Transferir shapefile na Análise' na Guia Relatório",
    "allowVisibleLayerAnalysisLabel": "Não analisar ou relatar resultados para camadas que não são visíveis",
    "allowVisibleLayerAnalysisHintText": "Sugestão: As camadas que foram desativadas ou não são visíveis devido ao ajuste das configurações de visibilidade não serão analisadas ou incluídas em resultados impressos ou baixados.",
    "areaUnitsLabel": "Mostrar resultados da análise em",
    "maxFeatureForAnalysisLabel": "Máximo de feições para análise",
    "maxFeatureForAnalysisHintText": "Sugestão: Configure o número máximo de feições para análise",
    "searchToleranceLabelText": "Tolerância de Pesquisa",
    "searchToleranceHint": "Sugestão: A tolerância de pesquisa é somente utilizada ao analisar entradas de pontos e linhas",
    "placenameButtonText": "Nome do local",
    "drawToolsButtonText": "Desenhar",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Coordenadas",
    "invalidLayerErrorMsg": "Configure os campos para"
  },
  "downloadTab": {
    "downloadLegend": "Configurações de Download",
    "reportLegend": "Configurações do Relatório",
    "downloadTabLabel": "Download",
    "syncEnableOptionLabel": "Camadas de Feições",
    "syncEnableOptionHint": "Sugestão: Utilizado para baixar informações da feição para as feições que interseccionam a área de interesse nos formatos indicados.",
    "syncEnableOptionNote": "Anotação: Os serviços de feição com sincronização habilitada são exigidos para opção Arquivo Geodatabase.",
    "extractDataTaskOptionLabel": "Serviço de geoprocessamento Extrair Tarefa de Dados",
    "extractDataTaskOptionHint": "Sugestão: Utilize um serviço de geoprocessamento Extrair Tarefa de Dados publicado para baixar feições que interseccionam a área de interesse nos formatos Arquivo Geodatabase ou Shapefile.",
    "cannotDownloadOptionLabel": "Desabilitar o download",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nome da Camada",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Arquivo Geodatabase",
      "allowDownloadLabel": "Permitir Download"
    },
    "setButtonLabel": "Configurar",
    "GPTaskLabel": "Especifique a url para o serviço de geoprocessamento",
    "printGPServiceLabel": "Imprimir URL do Serviço",
    "setGPTaskTitle": "Especifique a URL de Serviço de Geoprocessamento exigida",
    "logoLabel": "Logotipo",
    "logoChooserHint": "Sugestão: Clique no ícone de imagem para alterar a imagem",
    "footnoteLabel": "Nota de rodapÃ©",
    "columnTitleColorPickerLabel": "Cor para títulos de coluna",
    "reportTitleLabel": "Título do Relatório",
    "errorMessages": {
      "invalidGPTaskURL": "Serviço de geoprocessamento inválido. Selecione o serviço de geoprocessamento contendo Extrair Tarefa de Dados.",
      "noExtractDataTaskURL": "Selecione qualquer serviço de geoprocessamento contendo Extrair Tarefa de Dados."
    }
  },
  "generalTab": {
    "generalTabLabel": "Geral",
    "tabLabelsLegend": "Rótulos do Painel",
    "tabLabelsHint": "Sugestão: Especificar Rótulos",
    "AOITabLabel": "Painel de Área de Interesse",
    "ReportTabLabel": "Painel de Relatório",
    "bufferSettingsLegend": "Configurações do Buffer",
    "defaultBufferDistanceLabel": "Distância de Buffer Padrão",
    "defaultBufferUnitsLabel": "Unidades do Buffer",
    "generalBufferSymbologyHint": "Sugestão: Configure a simbologia para ser utilizado para exibir buffers ao redor das áreas de interesse definidas",
    "aoiGraphicsSymbologyLegend": "Simbologia de Gráficos AOI",
    "aoiGraphicsSymbologyHint": "Sugestão: Configure a simbologia a ser utilizada ao definir as áreas de interesse de ponto, linha e polígono",
    "pointSymbologyLabel": "Ponto",
    "previewLabel": "Visualizar",
    "lineSymbologyLabel": "Linha",
    "polygonSymbologyLabel": "Polígono",
    "aoiBufferSymbologyLabel": "Simbologia de Buffer",
    "pointSymbolChooserPopupTitle": "Símbolo de local ou endereço",
    "polygonSymbolChooserPopupTitle": "Selecionar símbolo para destacar polígono",
    "lineSymbolChooserPopupTitle": "Selecione a símbolo para destacar a linha",
    "aoiSymbolChooserPopupTitle": "Configurar símbolo do buffer",
    "aoiTabText": "AOI",
    "reportTabText": "Relatório",
    "invalidSymbolValue": "Valor de símbolo inválido."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Configurações da Fonte de Pesquisa",
    "searchSourceSettingTitle": "Configurações da Fonte de Pesquisa",
    "searchSourceSettingTitleHintText": "Adicione e configure serviços de geocódigo ou camadas de feição como fontes de pesquisa. Estas fontes especificadas determinam o que é pesquisável dentro da caixa de pesquisa.",
    "addSearchSourceLabel": "Adicionar Fonte de Pesquisa",
    "featureLayerLabel": "Camada de Feição",
    "geocoderLabel": "Geocodificador",
    "generalSettingLabel": "Configurações Gerais",
    "allPlaceholderLabel": "Texto de local reservado para pesquisar todos:",
    "allPlaceholderHintText": "Sugestão: Insira o texto a ser mostrado como reservado ao pesquisar todas as camadas e geocodificador",
    "generalSettingCheckboxLabel": "Mostrar pop-up do local ou feição localizada",
    "countryCode": "Códigos de Região e País",
    "countryCodeEg": "por exemplo ",
    "countryCodeHint": "Deixar este valor em branco pesquisará todos os países e regiões",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Somente pesquisar na extensão de mapa atual",
    "zoomScale": "Escala de Zoom",
    "locatorUrl": "URL do Geocodificador",
    "locatorName": "Nome do Geocodificador",
    "locatorExample": "Exemplo",
    "locatorWarning": "Esta versão do serviço de geocodificação não é suportado. O widget suporta serviço de geocodificação 10.0 e superior.",
    "locatorTips": "As sugestões não estão disponíveis, pois o serviço de geocodificação não suporta o recursos de sugestão.",
    "layerSource": "Origem da Camada",
    "setLayerSource": "Configurar Origem da Camada",
    "setGeocoderURL": "Configurar URL do Geocodificador",
    "searchLayerTips": "As sugestões não estão disponíveis, pois o serviço da feição não suporta o recursos de paginação.",
    "placeholder": "Texto do Placeholder",
    "searchFields": "Pesquisar Campos",
    "displayField": "Campo de Visualização",
    "exactMatch": "Combinação Exata",
    "maxSuggestions": "Máximo de Sugestões",
    "maxResults": "Máximo de Resultados",
    "enableLocalSearch": "Habilitar pesquisa de local",
    "minScale": "Escala Mín",
    "minScaleHint": "Quando a escala do mapa for maior que esta escala, a pesquisa de local será aplicada",
    "radius": "Raio",
    "radiusHint": "Especifica o raio de uma área ao redor do centro do mapa atual que é utilizado para impulsionar o grau de candidatos de geocodificação de forma que os candidatos mais próximos ao local sejam retornados primeiro",
    "setSearchFields": "Configurar Campos de Pesquisa",
    "set": "Configurar",
    "invalidUrlTip": "A URL ${URL} é inválida ou inacessível.",
    "invalidSearchSources": "Configurações de fonte de pesquisa inválida"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Preencha os campos exigidos",
    "bufferDistanceFieldsErrorMsg": "Insira valores válidos",
    "invalidSearchToleranceErrorMsg": "Insira um valor válido para tolerância de pesquisa",
    "atLeastOneCheckboxCheckedErrorMsg": "Configuração inválida: Pelo menos uma Ferramenta AOI é exigida.",
    "noLayerAvailableErrorMsg": "Nenhuma camada disponível",
    "layerNotSupportedErrorMsg": "Não Suportado ",
    "noFieldSelected": "Utilize a ação de edição para selecionar campos para análise.",
    "duplicateFieldsLabels": "Duplicar rótulo \"${labelText}\" adicionado para : \"${itemNames}\"",
    "noLayerSelected": "Selecione pelo menos uma camada para análise",
    "errorInSelectingLayer": "Não é possível completar a operação de seleção da camada. Tente novamente.",
    "errorInMaxFeatureCount": "Insira a contagem do máximo de feições válidas para análise."
  }
});