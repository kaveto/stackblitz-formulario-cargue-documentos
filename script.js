const surveyJson = {
  "locale": "es",
  "title": {
    "default": "FORMULARIO DE PETICIÓN DE ASILO",
    "es": "FORMULARIO DE ENVÍO DE DOCUMENTOS"
  },
  "description": {
    "default": "La información que usted consigne en este formulario será usada para la presentación de su solicitud ante la entidad migratoria correspondiente. Por favor responda cada pregunta con veracidad.",
    "es": "\n"
  },
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=a362a035-fea5-40e0-81c5-991c98be0b65",
  "logoWidth": "0px",
  "logoHeight": "0px",
  "logoFit": "none",
  "logoPosition": "right",
  "pages": [
    {
      "name": "Información general",
      "questionTitleLocation": "left",
      "title": {
        "default": "INFORMACIÓN DEL TITULAR",
        "es": "INFORMACIÓN GENERAL"
      },
      "navigationTitle": {
        "es": "informacion general"
      },
      "elements": [
        {
          "type": "text",
          "name": "radicado",
          "title": {
            "es": "Radicado"
          },
          "titleLocation": "top",
          "defaultValueExpression": "{radicadoVar}",
          "isRequired": true
        },
        {
          "type": "html",
          "name": "informacion-gral",
          "minWidth": "500px",
          "html": {
            "es": "<p> Para continuar con su proceso migratorio, le solicitamos que proporcione los siguientes documentos. Estos serán utilizados exclusivamente para gestionar su solicitud: \n<ol>\n  <li>- Documentos del Titular del Proceso</li>\n  <li>- Documentos del Cónyuge (si aplica)</li>\n  <li>- Documentos de los Hijos (si aplica)</li>\n</ol>\n<p> "
          }
        }
      ]
    },
    {
      "name": "Información del titular",
      "title": {
        "default": "INFORMACIÓN PERSONAL",
        "es": "INFORMACIÓN DEL TITULAR"
      },
      "navigationTitle": {
        "default": "1. Información Personal",
        "es": "Información del titular"
      },
      "elements": [
        {
          "type": "dropdown",
          "name": "tipo_proceso",
          "title": {
            "es": "Tipo de Proceso"
          },
          "titleLocation": "top",
          "isRequired": true,
          "choices": [
            {
              "value": "ASILO AFIRMATIVO",
              "text": {
                "es": "Asilo afirmativo"
              }
            },
            {
              "value": "ASILO DEFENSIVO",
              "text": {
                "es": "Asilo defensivo"
              }
            },
            {
              "value": "ASILO AFIRMATIVO - FUERA DE TIEMPO",
              "text": {
                "es": "Asilo afirmativo - fuera de tiempo"
              }
            },
            {
              "value": "ASILO DEFENSIVO - FUERA DE TIEMPO",
              "text": {
                "es": "Asilo defensivo - fuera de tiempo"
              }
            },
            {
              "value": "SOLICITUD FOIA",
              "text": {
                "es": "Solicitud FOIA"
              }
            },
            {
              "value": "PERMISO DE TRABAJO",
              "text": {
                "es": "Permiso de trabajo"
              }
            },
            {
              "value": "RENOVACION PERMISO DE TRABAJO",
              "text": {
                "es": "Renovacion permiso de trabajo"
              }
            },
            {
              "value": "PETICION FAMILIAR POR MATRIMONIO",
              "text": {
                "es": "Peticion familiar por matrimonio"
              }
            },
            {
              "value": "PETICION FAMILIAR",
              "text": {
                "es": "Peticion familiar"
              }
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "Estado_civil",
          "title": {
            "default": "Estado Civil",
            "es": "Estado civil"
          },
          "titleLocation": "top",
          "isRequired": true,
          "choices": [
            "Soltero/a",
            "Casado/a",
            "Unión libre",
            "Divorciado/a",
            "Separad/a"
          ]
        },
        {
          "type": "boolean",
          "name": "Tiene_hijos",
          "startWithNewLine": false,
          "title": {
            "es": "¿Tiene hijos?"
          },
          "titleLocation": "top",
          "isRequired": true
        }
      ]
    },
    {
      "name": "Documentos personales",
      "title": {
        "default": "INFORMACIÓN PERSONAL",
        "es": "DOCUMENTOS PERSONALES"
      },
      "navigationTitle": {
        "default": "1. Información Personal",
        "es": "Documentos personales"
      },
      "elements": [
        {
          "type": "file",
          "name": "pasaporte_titular",
          "title": {
            "es": "Pasaporte"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "id_titular",
          "title": {
            "es": "Documento de identidad de país origen"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "foto_titular",
          "title": {
            "es": "Foto para expediente del proceso"
          },
          "description": {
            "es": "Debe subir una foto tipo carnet fondo blanco o azul, de hombros hacia arriba."
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "bill_actualizado_titular",
          "title": {
            "es": "Bill de dirección de vivienda actual"
          },
          "description": {
            "es": "Se requiere una imagen donde se pueda visualizar la dirección de vivienda actual."
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        }
      ]
    },
    {
      "name": "Documentos adicionales",
      "title": {
        "default": "INFORMACIÓN DEMOGRÁFICA",
        "es": "DOCUMENTOS ADICIONALES"
      },
      "navigationTitle": {
        "default": "2. Información Demográfica",
        "es": "Documentos adicionales"
      },
      "elements": [
        {
          "type": "file",
          "name": "visa_titular",
          "visibleIf": "{tipo_proceso} = 'ASILO AFIRMATIVO' or {tipo_proceso} = 'ASILO AFIRMATIVO - FUERA DE TIEMPO'",
          "title": {
            "es": "Visa con la que ingresó a EE.UU."
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "doc_frontera_titular",
          "visibleIf": "{tipo_proceso} = 'ASILO DEFENSIVO' or {tipo_proceso} = 'ASILO DEFENSIVO - FUERA DE TIEMPO'",
          "title": {
            "es": "Documentos recibidos en frontera"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "acta_nacimiento_titular",
          "visibleIf": "{Tiene_hijos} = true",
          "title": {
            "es": "Acta de Nacimiento"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "Acta_matrimonio",
          "visibleIf": "{Estado_civil} = 'Casado/a'",
          "title": {
            "es": "Acta de matrimonio"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        }
      ]
    },
    {
      "name": "Documentos conyugue",
      "visibleIf": "{Estado_civil} = 'Casado/a'",
      "title": {
        "default": "REGISTRO FAMILIAR ",
        "es": "DOCUMENTOS CONYUGUE"
      },
      "description": {
        "default": "En esta segunda sección compilaremos toda la información relacionada con sus  padres y hermanos , así como medios hermanos que pueda tener. De igual manera de su esposa e hijos en caso de tenerlos.",
        "es": "\n"
      },
      "navigationTitle": {
        "default": "3. Registro Familiar",
        "es": "Documentos conyugue"
      },
      "elements": [
        {
          "type": "file",
          "name": "Pasaporte_conyugue",
          "title": {
            "es": "Pasaporte"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "id_conyugue",
          "title": {
            "es": "Documento de identidad de país origen"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "foto_conyugue",
          "title": {
            "es": "Foto para expediente del proceso"
          },
          "description": {
            "es": "Debe subir una foto tipo carnet fondo blanco o azul, de hombros hacia arriba."
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "dropdown",
          "name": "Forma_ingreso_conyugue",
          "title": {
            "es": "Forma de ingreso a EE.UU"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "Con visa",
              "text": {
                "es": "Con visa"
              }
            },
            {
              "value": "Sin visa - por frontera",
              "text": {
                "es": "Sin visa - por frontera"
              }
            }
          ]
        },
        {
          "type": "file",
          "name": "visa_conyugue",
          "visibleIf": "{Forma_ingreso_conyugue} = 'Con visa'",
          "title": {
            "es": "Visa con la que ingresó a EE.UU."
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "file",
          "name": "doc_frontera_conyugue",
          "visibleIf": "{Forma_ingreso_conyugue} = 'Sin visa - por frontera'",
          "title": {
            "es": "Documentos recibidos en frontera"
          },
          "isRequired": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        }
      ]
    },
    {
      "name": "Documentos hijos",
      "visibleIf": "{Tiene_hijos} = true",
      "title": {
        "default": "INFORMACIÓN MIGRATORIA",
        "es": "DOCUMENTOS HIJOS"
      },
      "navigationTitle": {
        "default": "4. Información Migratoria",
        "es": "Documentos hijos"
      },
      "elements": [
        {
          "type": "paneldynamic",
          "name": "Informacion_hijos",
          "title": {
            "es": "Información de hijos"
          },
          "templateElements": [
            {
              "type": "file",
              "name": "pasaporte_hijo",
              "title": {
                "es": "Pasaporte"
              },
              "isRequired": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            },
            {
              "type": "file",
              "name": "id_hijo",
              "title": {
                "es": "Documento de identidad de país origen"
              },
              "isRequired": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            },
            {
              "type": "file",
              "name": "foto_hijo",
              "title": {
                "es": "Foto para expediente del proceso"
              },
              "description": {
                "es": "Debe subir una foto tipo carnet fondo blanco o azul, de hombros hacia arriba."
              },
              "isRequired": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            },
            {
              "type": "dropdown",
              "name": "forma_ingreso_hijo",
              "title": {
                "es": "Forma de ingreso a EE.UU"
              },
              "isRequired": true,
              "choices": [
                {
                  "value": "Con visa",
                  "text": {
                    "es": "Con visa"
                  }
                },
                {
                  "value": "Sin visa - por frontera",
                  "text": {
                    "es": "Sin visa - por frontera"
                  }
                }
              ]
            },
            {
              "type": "file",
              "name": "visa_hijo",
              "visibleIf": "{panel.forma_ingreso_hijo} = 'Con visa'",
              "title": {
                "es": "Visa con la que ingresó a EE.UU."
              },
              "isRequired": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            },
            {
              "type": "file",
              "name": "doc_frontera_hijo",
              "visibleIf": "{panel.forma_ingreso_hijo} = 'Sin visa - por frontera'",
              "title": {
                "es": "Documentos recibidos en frontera"
              },
              "isRequired": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            }
          ],
          "templateTitle": {
            "es": "Hijo No. {panelIndex} "
          },
          "noEntriesText": {
            "es": "Aún no hay entradas.\nHaga clic en el botón de abajo para agregar un hijo"
          },
          "panelCount": 1,
          "minPanelCount": 1,
          "confirmDelete": true,
          "panelAddText": {
            "es": "Añadir otro hijo"
          },
          "panelRemoveText": {
            "es": "Eliminar registro"
          }
        }
      ]
    }
  ],
  "sendResultOnPageNext": true,
  "showPageNumbers": true,
  "showQuestionNumbers": "off",
  "showProgressBar": "aboveheader",
  "progressBarShowPageTitles": true,
  "progressBarShowPageNumbers": true,
  "showTOC": true,
  "tocLocation": "right",
  "storeOthersAsComment": false,
  "clearInvisibleValues": "none",
  "textUpdateMode": "onTyping",
  "autoGrowComment": true,
  "startSurveyText": "Comenzar",
  "completeText": "Enviar",
  "editText": "Editar",
  "firstPageIsStarted": true,
  "widthMode": "responsive",
  "width": "1200px"
};
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url_Radicado = urlParams.get('radicado');
  console.log('urlRadicado ' + url_Radicado);
  
  function alertResults(sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
    console.log(sender.data);
  }
  
  const survey = new Survey.Model(surveyJson);
  document.addEventListener('DOMContentLoaded', function () {
    survey.setVariable('radicadoVar', url_Radicado);
    survey.render(document.getElementById('surveyContainer'));
    survey.onComplete.add(alertResults);
  });
  
