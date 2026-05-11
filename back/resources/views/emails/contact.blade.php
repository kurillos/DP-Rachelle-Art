<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: 'Helvetica', sans-serif;
            color: #2d3748;
        }

        .card {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
        }

        .header {
            color: #7A5CFF;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .field {
            margin-bottom: 10px;
        }

        .label {
            font-weight: bold;
            color: #718096;
            text-transform: uppercase;
            font-size: 12px;
        }

        .content {
            background: #f7fafc;
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="card">
        <div class="header">Nouveau projet Arts Visuels</div>

        <div class="field">
            <div class="label">Client</div>
            <div>{{ $data['name'] }} ({{ $data['email'] }})</div>
        </div>

        @if($data['phone'])
        <div class="field">
            <div class="label">Téléphone</div>
            <div>{{ $data['phone'] }}</div>
        </div>
        @endif

        <div class="field">
            <div class="label">Message</div>
            <div class="content italic text-gray-400">
                {!! nl2br(e($data['message'])) !!}
            </div>
        </div>
    </div>
</body>

</html>