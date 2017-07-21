import DS from 'ember-data';
var cars =  DS.Model.extend({
name: DS.attr('string');
number:DS.attr('string');
brand:DS.attr('string');
type:DS.attr('string');
fullName: function(){
	return "%@%@".fmt(this.get('brand'),this.get('name'));
}.property('brand','name');

modelNumber : function(){
	return "%@%@".fmt(this.get('type'),this.get('number'));
}.property('type','number');
});
Car.reopenClass({
	FIXTURES: [
	{id:1, name:'C-Class', number:'101', brand:'Mercedes', type:'Sedan'},
	{id:2, name:'E-Class', number:'201', brand:'Mercedes', type:'Maybach'},
	{id:3, name:'S-Class', number:'301', brand:'Mercedes', type:'Wagon'}
	]	
});
export default car;
