//
// Phrame.js v0.01
//
// Single point of entry file.
//
// This file sets certain config variables and loads the bootstrap.
// This file is the only file that will be visible to your image editing software. 	
//

// SET GLOBAL VARIABLES. 
var APP_NAME		=	'Phrame.js';	//remove: Set the name of the application (case sensitive). This name is the same as the folder and application name. Default: Phrame.js
var APP_PATH		=	app.path + '/' + localize("$$$/ScriptingSupport/InstalledScripts=Presets/Scripts") + '/' + APP_NAME + '/';
var APP_EXT			=	'.jsph';

// Beware: these folder pseudo constants are automatically changed by the bootstrap for easier use.
var FOLDER_AP		=	'application';
var	FOLDER_SY		=	'system';
var FOLDER_DB		=	'database';
var FOLDER_AS		=	'assets';

var DB_EXT			=	'.json';
var DB_SUF			=	'_db';
var DB_LOAD			=	true;	// Set to false to prevent unneccessary overload.

// Check if there is an active document, else return undefined.
var DOC				=	function() 
						{
							try 
							{
								var activeDoc	=	app.activeDocument;
							}
							catch(e)
							{
								return 'undefined';
							}
							return activeDoc;
						}();

// LOAD BOOTSTRAP
$.evalFile (File(APP_PATH + FOLDER_SY + '/' + 'bootstrap' + APP_EXT));