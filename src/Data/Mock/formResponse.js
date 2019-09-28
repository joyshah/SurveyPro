export var formFieldData = {
    "surveyName":"Infosys Salary",
    "survey_id":"123",
    "surveyDescription":"Some description",
    "fromDate":"20-08-2018",
    "endDate":"20-08-2018",
    "questionRequestList":[
    {
    "question_id":"231",
    "question":"how r u?",
    "questionType": 1,
    "questionOptions":[{"opt_id":"1","opt_value":"fine"},{"opt_id":"2","opt_value":"Not Good"}]
    },
    {
    "question_id":"232",
    "question":"are ypu satified with salary?",
    "questionType": 1,
    "questionOptions":[{"opt_id":"3","opt_value":"yes"},{"opt_id":"4","opt_value":"No"}]
    },
    {
    "question_id":"242",   
    "question":"full name",
    "questionType": 4
    }
    ]
    
    }


    export const data_to_send = {
        "surveyName":"Infosys Salary",
        "surveyDescription":"Some description",
        "fromDate":"20-08-2018",
        "endDate":"20-08-2018",
        "questionRequestList":[
        {
        "question":"how r u?",
        "questionType": 1,
        "questionOptions":["fine","not fine"]
        },
        {
        "question":"are ypu satified with salary?",
        "questionType": 1,
        "questionOptions":["yes","no"]
        },
        {
        "question":"full name",
        "questionType": 4
        }
        ]
        
        }