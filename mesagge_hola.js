Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    title: '!Bienvenido!',
    text: 'Disfruta el menú.',
    icon: 'info',
    popup: 'swal2-noanimation',
    backdrop: 'swal2-noanimation',
    image: 'gatito.jpg',
    confirmButtonText: 'Cool'
})