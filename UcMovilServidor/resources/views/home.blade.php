@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    You are logged in!
                    <br><br>
                    {{ Auth::user()}}
                    <br><br>
                    <input class="btn btn-primary" type="button" value="Alumno"></input>
                    <input class="btn btn-success" type="button" value="Profesor"></input>
                    <input class="btn btn-info" type="button" value="Secretaria" onclick="location.href='{{ url('http://www.google.com') }}'"></input>
                    <input class="btn btn-danger" type="button" value="Director de Carrera" onclick="window.location='{{ route("c_d_escuela") }}'"></input>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
