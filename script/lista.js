var usuario = prompt ("cual es tu peso")
var planeta = parseInt (prompt("Elige un Planeta.\n1 es mercurio\n2 es venus\n3 es Tierra\n4 es marte\n5 es jupiter\n6 es saturno\n7 es urano\n8 es neptuno"));
var peso = parseInt(usuario);
var g_mercurio = 3.7;
var g_venus = 8.9; 
var g_Tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.4;
var g_urano = 8.9;
var g_neptuno = 11.5;
var peso_final;
var nombre="";
if(planeta ==1)
{
     peso_final=peso*g_mercurio/g_Tierra;
     nombre = "mercurio";
}
else if(planeta ==2)
{
    peso_final=peso*g_mercurio/g_Tierra;
    nombre = "venus";
}
else if(planeta ==3)
{
    peso_final=peso*g_mercurio/g_Tierra;
    nombre = "tiera";
}
else if(planeta ==4)
{
    peso_final=peso*g_mercurio/g_Tierra;
    nombre = "marte";
}
else if(planeta ==5)
{
    peso_final=peso*g_mercurio/g_Tierra;
    nombre = "jupiter";
}
else if(planeta ==6)
{
    peso_final=peso*g_mercurio/g_Tierra;
    nombre = "saturno";
}
else if(planeta ==7)
{
    peso_final=peso*g_mercurio/g_Tierra;
    nombre = "urano";
}
else if(planeta ==8)
{
    peso_final=peso*g_mercurio/g_Tierra;
    nombre = "neptuno";
}
else
{
    peso_final=1000000;
    nombre = "krypton";
}
peso_final=parseInt(peso_final);
document.write("tu peso en " + nombre + " es <strong>" + peso_final + "kilos </strong>");