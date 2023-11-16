<table style="font-family: 'Arial', sans-serif;
background-color: #f0f0f0;">
    <thead>
        <tr>
            <th style="border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;">Product Name
            </th>
            <th style="border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;">Quantity</th>
            <th style="border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;">Price</th>
            <th style="border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;">Total Price
            </th>
        </tr>
    </thead>
    <tbody>
        <?php $paycheck = 0; ?>
        @foreach ($data as $item)
            <tr>
                <td style="border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;">
                    {{ $item['name'] }}</td>
                <td style="border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;">
                    {{ $item['quantity'] }}</td>
                <td style="border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;">
                    {{ $item['price'] }}</td>
                <td style="border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;">
                    {{ $item['price'] * $item['quantity'] }}</td>
                <?php $paycheck += $item['price'] * $item['quantity']; ?>
            </tr>
        @endforeach
    </tbody>
</table>
<p>Adress: {{$adress}}</p>
<p>Total Paycheck: {{ $paycheck }}</p>
