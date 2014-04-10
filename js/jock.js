$(document).ready(function() {
   
    $("#linkedin" ).mouseover(function() {
   		$("#pdf").animate({
                         opacity: .5
                         }, function() {

                                 });

		$("#mail").animate({
                         opacity: .5
                         }, function() {
                         
                                 });
 		 }).mouseout(function(){
                                 $("#pdf").animate({
                                         opacity: 1
                                         }, function() {

                                        });
				$("#mail").animate({
                        		 opacity: 1
                         		}, function() {

                                 	}); 
		});
$("#pdf" ).mouseover(function() {
                $("#linkedin").animate({
                         opacity: .5
                         }, function() {

                                 });

                $("#mail").animate({
                         opacity: .5
                         }, function() {

                                 });
                 }).mouseout(function(){
                                 $("#linkedin").animate({
                                         opacity: 1
                                         }, function() {

                                        });
                                $("#mail").animate({
                                         opacity: 1
                                        }, function() {

                                        });
                });

$("#mail" ).mouseover(function() {
                $("#pdf").animate({
                         opacity: .5
                         }, function() {

                                 });

                $("#linkedin").animate({
                         opacity: .5
                         }, function() {

                                 });
                 }).mouseout(function(){
                                 $("#pdf").animate({
                                         opacity: 1
                                         }, function() {

                                        });
                                $("#linkedin").animate({
                                         opacity: 1
                                        }, function() {

                                        });
                });

});
