<!DOCTYPE html>
<html lang="ja">
    <head>
    <meta charset="UTF-8">
        <title>最終課題(住所検索)</title>
        <script src="ziptable.js"></script>

        <script>
           <function search_partial(){
                var i;
                var input = prompt('都道府県を入力してください.', '千葉県');//入力された文字列
                var result ='見つかりません'; // 検索結果を入れる変数'
                for(i =0; i < zipdb.length; ++i){
                    if ( zipdb[i]['address'].match(input)){ // 入力がi番のデータと部分一致かどうか判定
                        result = zipdb[i]['zip']+zipdb[i]['address'];
                        break; // 最も内側の for ループから抜け出す
                    }
                }
                document.getElementById('out').innerHTML = result; // 検索結果を out の ID を持つ要素に書く
            }
            function search_exact(){
                var i;
                var input('郵便番号を入力してください.', '2730864');//入力された文字列
                var result = 'Not found.'; // 検索結果を入れる変数
                var n = zipdb.length; // 検索対象の配列の大きさ
                for(i = 0; i < n; ++i){
                    if(  zipdb[i]['zip'] == input ){ // 入力がi番のデータと完全一致かどうか判定
                         result = zipdb[i]['zip']+zipdb[i]['address'];
                         break; // 最も内側の　for ループから抜け出す
                    }
                }
                document.getElementById('out').innerHTML = result; // 検索結果を out の IDを持つ要素に書く
            }
        </script>
    </head>

    <body>
        学籍番号2242057 氏名杉本彩里<br>
        <hr>
        <table border="1"
            <tr>
                 <tb onclick="search_partial()">住所検索 (部分一致)</tb>
                 <tb onclick="search_exact()">郵便番号を検索 （完全一致）</tb>
            </tr>
            <tr>
                <tb id="out" colspan="2">検索結果はここに表示されます</tb>
            </tr>
        </table>
        <hr>
        <script>
            document.write('table BORDER="1">');
            document.write('<tr><th>#</th><th>郵便番号</th><th>住所</th><tr>')

            var i = 0;
            for(i = 0; i < 5; ++i){
                document.write('<tr><td>' + i + '</td><td>'+zipdb[i]['zip']+'</td><td>'+zipdb[i]['address']+'</td><tr>');
            }
            document.write('<tr><td colspan="3">...</td><tr>')

            var i=122388;
            for(i=122388; i<122392+1; ++i){
                document.write('<tr><td>' + i + '</td><td>'+zipdb[i]['zip']+'</td><td>'+zipdb[i]['address']+'</td><tr>');
            }

            document.write('</table>');
        </script>
    </body>
</html>
