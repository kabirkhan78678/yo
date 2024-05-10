$(document).ready(function(){
    $('.ct_menu_bar').click(function(){
        $('.ct_nav_menu ul').addClass('ct_active')
    })
    $('.ct_close_bar').click(function(){
        $('.ct_nav_menu ul').removeClass('ct_active')
    })
})



     $(document).ready(function(){
        $('.ct_toggle_side').click(function(){
            $('.ct_dashbaord_main').toggleClass('ct_active')
        })
    })


    $(document).ready(function(){
        $('.ct_filter_modal_btn').click(function(){
            $('#ct_filter_modal').addClass('ct_active')
        })
        $('.ct_close_modal').click(function(){
            $('#ct_filter_modal').removeClass('ct_active')
        })
    })


   
