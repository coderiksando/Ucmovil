<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/log', 'LoginController@Login');

Route::get('/alumno', 'AlumnoController@index')->name('c_alumno');
Route::get('/alumnos/MensajeriaC', 'AlumnoController@MensajeriaC');
Route::get('/alumnos/MensajesC', 'AlumnoController@MensajesC');
Route::get('/alumnos/Solicitud', 'AlumnoController@Solicitud');
Route::get('/BuscarPorIdA', 'AlumnoController@BuscarPorIdA');
Route::get('/d_escuela', 'DirectorCarreraController@index')->name('c_d_escuela');
Route::get('/profesor', 'ProfesorController@index')->name('c_profesor');
Route::get('/secretaria', 'SecretariaController@index')->name('c_secretaria');
Route::get('/datos_d', 'HomeController@datos_d')->name('d_tipo');
Route::get('/datos_s', 'HomeController@datos_s')->name('s_tipo');
Route::get('/datos_a', 'HomeController@datos_a')->name('a_tipo');
Route::get('/datos_p', 'HomeController@datos_p')->name('p_tipo');
Route::get('/cambioC', 'HomeController@cambioC')->name('cambioC');
Route::get('/cambioA', 'HomeController@cambioA')->name('cambioA');
Route::get('/cambioE', 'HomeController@cambioE')->name('cambioE');

Route::get('/profesores/Mensajeria', 'ProfesorController@Mensajeria');
Route::get('/profesores/MensajeriaExtra', 'ProfesorController@MensajeriaExtra');
Route::get('/profesores/Mensajes', 'ProfesorController@Mensajes');
Route::get('/profesores/MensajeriaC', 'ProfesorController@MensajeriaC');
Route::get('/profesores/MensajesC', 'ProfesorController@MensajesC');
Route::get('/HorarioA', 'AsignaturaController@HorarioA')->name('HorarioA');
Route::get('/Mensaje', 'HomeController@Mensaje')->name('Mensaje');


Route::get('/CodigoA', 'AsignaturaController@CodigoA')->name('CodigoA');
Route::get('/RamosA', 'AlumnoController@RamosA')->name('RamosA');
Route::get('/RamosActuales', 'AlumnoController@RamosActuales');
Route::get('/NameA', 'AsignaturaController@NameA')->name('NameA');
Route::get('/ProfesorA', 'AsignaturaController@ProfesorA')->name('ProfesorA');
Route::get('/HorarioA', 'AsignaturaController@HorarioA')->name('HorarioA');


Route::get('/NotasA', 'AsignaturaController@NotasA')->name('NotasA');
Route::get('/HistorialA', 'AsignaturaController@HistorialA')->name('HistorialA');
Route::get('/NotasAsignatura', 'AsignaturaController@NotasAsignatura')->name('NotasAsignatura');


Route::get('/d_escuela/mostrar_asignatura', 'DirectorCarreraController@mostrar_asignatura')->name('mostrar_asignatura');
Route::get('/d_escuela/anadir_asignatura', 'DirectorCarreraController@anadir_asignatura')->name('anadir_asignatura');
Route::get('/d_escuela/modificar_asignatura', 'DirectorCarreraController@modificar_asignatura')->name('modificar_asignatura');
Route::get('/d_escuela/borrar_asignatura', 'DirectorCarreraController@borrar_asignatura')->name('borrar_asignatura');
Route::get('/d_escuela/mostrar_profesor', 'DirectorCarreraController@mostrar_profesores')->name('mostrar_profesores');
Route::get('/d_escuela/anadir_profesor_ramo', 'DirectorCarreraController@anadir_profesor_ramo')->name('anadir_profesor_ramo');
Route::get('/d_escuela/mostrar_version_ramo', 'DirectorCarreraController@mostrar_version_ramo')->name('mostrar_version_ramo');
Route::get('/d_escuela/borrar_version_ramo', 'DirectorCarreraController@borrar_version_ramo')->name('borrar_version_ramo');
Route::get('/d_escuela/busqueda_sala', 'DirectorCarreraController@busqueda_sala')->name('busqueda_sala');
Route::get('/d_escuela/enviar_horario', 'DirectorCarreraController@enviar_horario')->name('enviar_horario');
Route::get('/directores_carreras/Mensajeria', 'DirectorCarreraController@Mensajeria');
Route::get('/directores_carreras/MensajeriaExtra', 'DirectorCarreraController@MensajeriaE');
Route::get('/directores_carreras/Mensajes', 'DirectorCarreraController@Mensajes');


Route::get('/secretaria/mostrar_noticia','SecretariaController@mostrar_noticia')->name('mostrar_noticia');
Route::get('/secretaria/agregar_noticia','SecretariaController@agregar_noticia')->name('agregar_noticia');
Route::get('/secretaria/editar_noticia','SecretariaController@editar_noticia')->name('editar_noticia');
Route::get('/secretarias/Mensajeria', 'SecretariaController@Mensajeria')->name('mensajeria');
Route::get('/secretarias/MensajeriaExtra', 'SecretariaController@MensajeriaE');
Route::get('/secretarias/Mensajes', 'SecretariaController@Mensajes')->name('mensajes');
Route::get('/secretaria/mostrar','SecretariaController@mostrar')->name('mostrar');
Route::get('/secretaria/rechazar','SecretariaController@rechazar')->name('rechazar');
Route::get('/secretaria/aceptar','SecretariaController@aceptar')->name('aceptar');
Route::get('/secretaria/solicitudes','SecretariaController@solicitudes')->name('solicitudes');
Route::get('/secretaria/solicitudesrechazo','SecretariaController@rechazarsolicitud')->name('solicitudesrechazado');
Route::get('/secretaria/solicitudesaceptado','SecretariaController@aceptarsolicitud')->name('solicitudesaseptada');
Route::get('/secretaria/mostrar_boletin','SecretariaController@mostrar_boletin')->name('mostrarboletin');
Route::get('/secretaria/aceptarboletines','SecretariaController@aceptar_boletin')->name('aceptarboletin');
Route::get('/secretaria/mostrar_horarios','SecretariaController@mostrar_horarios')->name('mostrarhorarios');
Route::get('/secretaria/aceptar_horarios','SecretariaController@aceptar_horario')->name('aceptarhorarios');
Route::get('/secretaria/rechazar_horarios','SecretariaController@rechazar_horario')->name('rechazarhorarios');


Route::get('/ramos_impartidos', 'ProfesorController@mostrar_impartidos');
Route::get('/ponderaciones', 'ProfesorController@mostrar_ponderaciones');
Route::get('/ingresoponderaciones', 'ProfesorController@ingresar_ponderaciones');
Route::get('/ListaAlumnos', 'ProfesorController@mostrar_lista');
Route::get('/ObtenerNotas', 'ProfesorController@obtener_notas');
Route::get('/IngresarNotas', 'ProfesorController@ingresar_notas');
Route::get('/profesor/enviar_boletin', 'ProfesorController@enviar_boletin');
Route::get('/profesor/obtener_horario', 'ProfesorController@obtener_horario');


Route::get('/ConsultaMalla', 'AlumnoController@ConsultaMalla');
