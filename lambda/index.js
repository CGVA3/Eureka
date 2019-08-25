// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

var textfromsite = '{"Dialogo":{"0":{"mensaje":"Esta es la historia de mi muerto...Todo comenzo un sabado a media noche, éramos cuatro jóvenes disfrutando de la comodidad de una cabaña a las afueras de la ciudad. Creí que era la manera perfecta para disfrutar con mi pareja despues de ese gran triunfo…","narrador":"Roger"},"1":{"mensaje":"Bienvenido detective","narrador":"Alexa"},"2":{"mensaje":"Que tal alexa. Dime los detalles","narrador":"Duron"},"3":{"mensaje":"¿Recuerdas a ese deportista Roger que ganó en los panamericanos la semana pasada? ","narrador":"Alexa"},"4":{"mensaje":"P","narrador":"User","opciones":2,"1":"Si","2":"No"},"5":{"mensaje":"Adentro se encuentra su cuerpo","narrador":"Alexa"},"6":{"mensaje":"Será mejor que veamos la escena del crimen","narrador":"Duron"},"7":{"mensaje":"Ahí está mi cuerpo… A dos metros se encontraba el cuchillo. Maldita arma que me mató. Ensangrentado y un poco doblado, no tan lastimado como mi cuerpo. Era la sala, terminé sentado sobre el sillón en una forma que de no ser porque lucía tan inanimado como un trapo olvidado y por esa enorme mancha de sangre sobre la alfombra, pareciera que dormía plácidamente., El detective examinó cuidadosamente y sin inmutarse la escena, recogió un poco de sangre, tomó medidas que parecieran inexplicables. Cuán común debió ser para él, ¿Para mi? la primera vez… Tan solo 24 años..., El detective procedió a conocer a los interrogados, mis amigos:","narrador":"Roger"},"8":{"mensaje":"¿A quien quiere conocer primero?","narrador":"Alexa"},"9":{"mensaje":"NA","narrador":"User","opciones":3,"1":"Jennifer","2":"Dahyann","3":"Samuel","lines":{"Jennifer":10,"Dahyann":11,"Samuel":12}},"10":{"mensaje":"Mi novia. Una gran chica, la conocí en su propia exposición de arte en Nueva York. Tez blanca, cabello ondulado y corto, algo introvertida pero alegre, siempre tan activa en sus proyectos. Orgullosa de su trabajo. Difícil fue para mi saber de su pasado cuando me enteré. Qué duro debió haber sido crecer tan sola y con tantas carencias… me cautivó su forma de ser., Como dije la conocí en aquella exposición, fui invitado por su padre quien resulta ser mi entrenador. Sospecho que lo hizo con el propósito de que nos conocieramos.","narrador":"Roger"},"11":{"mensaje":"La novia de Samuel. Chica rebelde, adinerada e inteligente. la más joven del grupo, tan solo 22 años. Talentosa pero fiestera y un poco desesperante. La conocí gracias a samuel quien usualmente me contaba historias sobre sus locuras cuando íbamos al café después de esos largos días de entrenamiento., La ida a la cabaña sería una buena oportunidad de conocer a esa chica funesta.","narrador":"Roger"},"12":{"mensaje":"Me fascinó su manera tan potente de ser. Sus grandes sueños que lo llevaban al límite lo convirtieron poco a poco en un ser indetenible y determinado, aunque arrogante y vanidoso., Encaminado en la política por sus padres quienes pusieron toda su fé y esperanza en el. El pobre hombre me confesó que él siempre deseó ser deportista al igual que yo., Lo conocí por negocios. Yo en mi lucha por mis sueños como deportista había llegado ya bastante lejos. Samuel requería apoyo para una campaña, así que me logró contactar y convencer de aparecer en su publicidad comercial.","narrador":"Samuel"},"13":{"mensaje":"¿A quien desea entrevistar primero?","narrador":"Alexa"},"14":{"mensaje":"NA","narrador":"User","opciones":3,"1":"Jennifer","2":"Dahyann","3":"Samuel","lines":{"Jennifer":15,"Dahyann":16,"Samuel":17}},"15":{"mensaje":"Al anochecer habíamos llegado del recorrido por el bosque que nos dió mi novio samuel. Llegamos con bastante hambre así que fuimos a la hermosa cocina de la cabaña. De pronto nos dimos cuenta de algo muy extraño y es que algunas cosas estaban fuera de su lugar, alguien movió los cubiertos de su espacio original, cosa muy extraña. Mas sin embargo supusimos que a alguno de nosotros olvidó que los utilizó., Más tarde hicimos una fogata para conversar después de un largo día hasta que decidí ir a la cama. Me fuí sola a pesar de que Samuel y yo dormimos en la misma habitación y nunca lo vi llegar… ni siquiera cuando a las 2:00 am me levante con hambre a revisar el refrigerador, caminé por la oscuridad. lo abrí y encontré la sandía, me decidí a ir a comerla a la sala cuando al encender la luz lo vi y pegue el grito de mi vidaAAAAAH!","narrador":"Dahyann","lines":{"Jennifer":18,"Dahyann":19,"Samuel":20}},"16":{"mensaje":"yo lo mate ","narrador":"Jennifer","lines":{"Jennifer":21,"Dahyann":22,"Samuel":23}},"17":{"mensaje":"yo lo mate","narrador":"Samuel ","lines":{"Jennifer":24,"Dahyann":25,"Samuel":26}},"18":{"mensaje":" ","narrador":" "},"19":{"mensaje":" ","narrador":" "},"20":{"mensaje":" ","narrador":" "},"21":{"mensaje":" ","narrador":" "},"22":{"mensaje":" ","narrador":" "},"23":{"mensaje":" ","narrador":" "},"24":{"mensaje":" ","narrador":" "},"25":{"mensaje":" ","narrador":" "},"26":{"mensaje":" ","narrador":" "},"27":{"mensaje":"¿Quieres repetir la historia de alguien?","narrador":"Alexa "},"28":{"mensaje":"NA","narrador":"User","opciones":3,"1":"Jennifer","2":"Dahyann","3":"Samuel","lines":{"Jennifer":15,"Dahyann":16,"Samuel":17}}}}' ;
var jsonObject = JSON.parse(textfromsite);
var i = 1;
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "<amazon:effect name='whispered'>Esta es la historia de mi muerte... Todo comenzo un sabado a media noche, éramos cuatro jóvenes disfrutando de la comodidad de una cabaña a las afueras de la ciudad. Creí que era la manera perfecta para disfrutar con mi pareja despues de ese gran triunfo </amazon:effect>";
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'Continue';
    },
    handle(handlerInput) {
        const speakOutput = jsonObject.Dialogo[i].mensaje;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
             i=i+1;
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
