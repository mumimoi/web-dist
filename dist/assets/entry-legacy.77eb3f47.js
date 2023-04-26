System.register(["./index-legacy.621344cf.js"],(function(e){"use strict";var r;return{setters:[function(e){r=e.bC}],execute:function(){var o={backup:"バックアップ",restore:"復元",start_backup:"バックアップを開始",finish_backup:"バックアップを完了",success_backup_item:"[ {{item}} ] バックアップに成功しました",failed_backup_item:"[ {{item}} ] バックアップに失敗しました",no_file:"ファイルが選択されていません",start_restore:"復元を開始",finish_restore:"復元を完了する",success_restore_item:"[ {{item}} ] バックアップに成功しました",failed_restore_item:"[ {{item}} ] バックアップに失敗しました",override:"オーバーライド"},i={"115 Cloud":{cookie:"Cookie","cookie-tips":"QRコードトークンとクッキーが必要",page_size:"ページサイズ","page_size-tips":"115 ドライバー用リスト api のページごとのサイズ",qrcode_token:"QRコードトークン","qrcode_token-tips":"QRコードトークンとクッキーが必要",root_folder_id:"ルート フォルダ ID"},"123Pan":{order_by:"並べ替え",order_bys:{file_name:"ファイル名",size:"大きさ",update_at:"変更時刻"},order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},password:"パスワード",root_folder_id:"ルート フォルダ ID",stream_upload:"ストリーミングアップロード",username:"ユーザー名"},"139Yun":{account:"アカウント",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"ルート フォルダ ID",type:"型",types:{family:"ファミリークラウド",personal:"個人的な雲"}},"189Cloud":{password:"パスワード",root_folder_id:"ルート フォルダ ID",username:"ユーザー名"},"189CloudPC":{family_id:"Family id",no_use_ocr:"OCR は使用されません",order_by:"並べ替え",order_bys:{filename:"ファイル名",filesize:"ファイルサイズ：",lastOpTime:"最終オープン時刻"},order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},password:"パスワード",rapid_upload:"高速アップロード",root_folder_id:"ルート フォルダ ID",type:"型",types:{family:"ファミリークラウド",personal:"個人的な雲"},username:"ユーザー名",validate_code:"検证コード"},"AList V2":{access_token:"アクセストークン",password:"パスワード",root_folder_path:"ルートフォルダのパス",url:"リンク"},"AList V3":{meta_password:"Meta password",password:"パスワード",root_folder_path:"ルートフォルダのパス",token:"トークン",url:"リンク",username:"ユーザー名"},Alias:{paths:"パス"},Aliyundrive:{internal_upload:"内部アップロード",order_by:"並べ替え",order_bys:{created_at:"作成日時",name:"名前",size:"大きさ",updated_at:"更新日時"},order_direction:"並べ替え方法",order_directions:{ASC:"昇順",DESC:"降順"},rapid_upload:"高速アップロード",refresh_token:"更新トークン",root_folder_id:"ルート フォルダ ID"},AliyundriveOpen:{client_id:"クライアント id","client_id-tips":"持っていない場合は空のままにしてください",client_secret:"クライアント シークレット","client_secret-tips":"持っていない場合は空のままにしてください",internal_upload:"内部アップロード","internal_upload-tips":"北京で Alibaba Cloud ECS を使用している場合は、オンにしてアップロード速度を向上させることができます。",oauth_token_url:"Oauth トークンの url",order_by:"並べ替え",order_bys:{created_at:"作成日時",name:"名前",size:"大きさ",updated_at:"更新日時"},order_direction:"並べ替え方法",order_directions:{ASC:"昇順",DESC:"降順"},refresh_token:"更新トークン",remove_way:"方法を削除",remove_ways:{delete:"削除",trash:"ごみ箱"},root_folder_id:"ルート フォルダ ID"},AliyundriveShare:{order_by:"並べ替え",order_bys:{created_at:"作成日時",name:"名前",size:"大きさ",updated_at:"更新日時"},order_direction:"並べ替え方法",order_directions:{ASC:"昇順",DESC:"降順"},refresh_token:"更新トークン",root_folder_id:"ルート フォルダ ID",share_id:"共有 id",share_pwd:"Pwdを共有"},BaiduNetdisk:{client_id:"クライアント ID",client_secret:"クライアント シークレット",download_api:"ダウンロードAPI",download_apis:{crack:"非公式",official:"公式"},order_by:"並べ替え",order_bys:{name:"名前",size:"大きさ",time:"時間"},order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},refresh_token:"更新トークン",root_folder_path:"ルートフォルダのパス"},BaiduPhoto:{album_id:"アルバム ID",client_id:"クライアント id",client_secret:"クライアント シークレット",refresh_token:"更新トークン",show_type:"ディスプレイの種類",show_types:{root:"根",root_only_album:"ルートのみのアルバム",root_only_file:"ルート ディレクトリの下のファイルのみ"}},BaiduShare:{BDUSS:"BDUSS",pwd:"パスワードを共有するためのBaiduネットワークディスク",root_folder_path:"ルートフォルダのパス",surl:"Baidu ネットワーク ディスク共有リンク"},Cloudreve:{address:"アドレス",password:"パスワード",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},FTP:{address:"アドレス",password:"パスワード",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},GoogleDrive:{chunk_size:"チャンクサイズ","chunk_size-tips":"アップロード中のチャンクサイズ(単位: MB)",client_id:"クライアント id",client_secret:"クライアント シークレット",order_by:"並べ替え","order_by-tips":"例: folder,name,modifiedTime",order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},refresh_token:"更新トークン",root_folder_id:"ルート フォルダ ID"},GooglePhoto:{client_id:"クライアント id",client_secret:"クライアント シークレット",refresh_token:"更新トークン",root_folder_id:"ルート フォルダ ID",show_archive:"アーカイブを表示"},Lanzou:{baseUrl:"ベース URL","baseUrl-tips":"ファイル操作の基本 URL",cookie:"Cookie","cookie-tips":"約15日間有効で、共有リンクを使用している場合は無視されます",repair_file_info:"修復ファイル情報","repair_file_info-tips":"WebDAVを使用するには、それを有効にする必要があります",root_folder_id:"ルート フォルダ ID",shareUrl:"シェアリンク","shareUrl-tips":"共有ページの取得に使用",share_password:"パスワードを共有",type:"型",types:{cookie:"Cookie",url:"リンク"}},Local:{mkdir_perm:"フォルダーのアクセス許可を作成する",root_folder_path:"ルートフォルダのパス",show_hidden:"非表示を表示する","show_hidden-tips":"隠しディレクトリとファイルを表示する",thumbnail:"サムネイル","thumbnail-tips":"サムネイルを有効にする"},MediaTrack:{access_token:"アクセストークン",order_by:"並べ替え",order_bys:{size:"大きさ",title:"名前",updated_at:"更新日時"},order_desc:"降順で並べ替える",project_id:"プロジェクト ID",root_folder_id:"ルート フォルダ ID"},Mega_nz:{email:"電子メール",password:"パスワード"},Onedrive:{chunk_size:"チャンクサイズ",client_id:"クライアント id",client_secret:"クライアント シークレット",is_sharepoint:"SharePointかどうか",redirect_uri:"リダイレクト Uri",refresh_token:"更新トークン",region:"地域",regions:{cn:"センチュリーコネクト",de:"ドイツ語版",global:"グローバル",us:"アメリカ版"},root_folder_path:"ルートフォルダのパス",site_id:"サイト ID"},OnedriveAPP:{chunk_size:"チャンクサイズ",client_id:"クライアント id",client_secret:"クライアント シークレット",email:"電子メール",region:"地域",regions:{cn:"センチュリーコネクト",de:"ドイツ語版",global:"グローバル",us:"アメリカ版"},root_folder_path:"ルートフォルダのパス",tenant_id:"テナント ID"},PikPak:{password:"パスワード",root_folder_id:"ルート フォルダ ID",username:"ユーザー名"},PikPakShare:{password:"パスワード",root_folder_id:"ルート フォルダ ID",share_id:"共有 id",share_pwd:"Pwdを共有",username:"ユーザー名"},Quark:{cookie:"Cookie",order_by:"並べ替え",order_bys:{file_name:"ファイル名",file_type:"ファイルの種類",none:"何一つ",updated_at:"更新日時"},order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},root_folder_id:"ルート フォルダ ID"},S3:{access_key_id:"アクセスキー id",bucket:"バケツ",custom_host:"カスタムHOST",endpoint:"Endpoint",force_path_style:"フォースパススタイル",list_object_version:"リストオブジェクトのバージョン",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"プレースホルダ",region:"地域",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"ルートフォルダのパス",secret_access_key:"シークレットアクセスキー",sign_url_expire:"署名 url の有効期限"},SFTP:{address:"アドレス",password:"パスワード",private_key:"秘密鍵",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},SMB:{address:"アドレス",password:"パスワード",root_folder_path:"ルートフォルダのパス",share_name:"共有名",username:"ユーザー名"},Seafile:{address:"アドレス",password:"パスワード",repoId:"RepoId",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},Teambition:{cookie:"Cookie",order_by:"並べ替え",order_bys:{created:"作成時刻",fileName:"ファイル名",fileSize:"ファイル サイズ",updated:"時刻を変更します"},order_direction:"並べ替え方法",order_directions:{Asc:"昇順",Desc:"降順"},project_id:"プロジェクト ID",region:"地域",regions:{china:"中国",international:"国際版"},root_folder_id:"ルート フォルダ ID"},Terabox:{cookie:"Cookie",download_api:"ダウンロードAPI",download_apis:{crack:"非公式",official:"公式"},order_by:"並べ替え",order_bys:{name:"名前",size:"大きさ",time:"時間"},order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},root_folder_path:"ルートフォルダのパス"},Thunder:{captcha_token:"キャプチャ",password:"パスワード",root_folder_id:"ルート フォルダ ID",username:"ユーザー名"},ThunderExpert:{algorithms:"アルゴリズム","algorithms-tips":"署名タイプはユーザー名で、必須です。",captcha_sign:"Captcha サイン","captcha_sign-tips":"サインタイプはcaptcha_signです、これは必須です",captcha_token:"キャプチャ",client_id:"クライアント id",client_secret:"クライアント シークレット",client_version:"クライアントのバージョン",device_id:"デバイス id",download_user_agent:"ユーザーエージェントのダウンロード",login_type:"ログオンの種類",login_types:{refresh_token:"更新トークン",user:"ユーザー"},package_name:"パッケージ名称",password:"パスワード","password-tips":"ログインタイプはユーザーです、これは必須です",refresh_token:"更新トークン","refresh_token-tips":"ログインの種類はrefresh_tokenですが、これは必須です",root_folder_id:"ルート フォルダ ID",sign_type:"サインタイプ",sign_types:{algorithms:"アルゴリズム",captcha_sign:"Captcha サイン"},timestamp:"タイムスタンプ","timestamp-tips":"サインタイプはcaptcha_signです、これは必須です",use_video_url:"動画のURLを使用",user_agent:"ユーザー エージェント",username:"ユーザー名","username-tips":"ログインタイプはユーザーです、これは必須です"},Trainbit:{AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"ルート フォルダ ID"},USS:{bucket:"バケツ",endpoint:"Endpoint",operator_name:"オペレーター名",operator_password:"オペレーターのパスワード",root_folder_path:"ルートフォルダのパス",sign_url_expire:"署名 url の有効期限"},UrlTree:{head_size:"ヘッドサイズ","head_size-tips":"HEADメソッドを使用してファイルサイズを取得しますが、失敗する可能性があります。",url_structure:"Url 構造","url_structure-tips":"構造:\nFolderName:\n  [FileName:][FileSize:][Modified:]Url"},Virtual:{max_file_size:"最大ファイルサイズ",min_file_size:"最小ファイルサイズ",num_file:"ファイルの数",num_folder:"フォルダの数",root_folder_path:"ルートフォルダのパス"},WebDav:{address:"アドレス",password:"パスワード",root_folder_path:"ルートフォルダのパス",username:"ユーザー名",vendor:"仕入先",vendors:{other:"その他",sharepoint:"Sharepoint"}},YandexDisk:{client_id:"クライアント id",client_secret:"クライアント シークレット",order_by:"並べ替え",order_bys:{created:"作成時刻",modified:"変更日",name:"名前",path:"パス",size:"大きさ"},order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},refresh_token:"更新トークン",root_folder_path:"ルートフォルダのパス"},config:{"115 Cloud":{},"123Pan":{},"139Yun":{},"189Cloud":{},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:"このドライバには無限ループのバグがある可能性があります。\n非推奨、保守されなくなり、将来のバージョンで削除される予定です。\n公式ドライバーの使用をお勧めします アリユンドライブオープン。"},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},FTP:{},GoogleDrive:{},GooglePhoto:{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},USS:{},UrlTree:{},Virtual:{},WebDav:{},YandexDisk:{}},drivers:{"115 Cloud":"115 ネットワークディスク","123Pan":"123ネットワークディスク","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189Cloudクライアント","AList V2":"AList V2","AList V3":"AList V3",Alias:"別名",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"Aliyundrive共有",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"Baidu共有",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",Lanzou:"Lanzou",Local:"ネイティブストレージ",MediaTrack:"MediaTrack",Mega_nz:"Mega ネットワークディスク",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPak株",Quark:"クォーク",S3:"オブジェクトストレージ",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambitionネットワークディスク",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",USS:"Upyunストレージ",UrlTree:"Urlツリー",Virtual:"仮想ストレージ",WebDav:"WebDav",YandexDisk:"YandexDisk"}},a={refresh:"更新",add:"追加",edit:"編集",delete:"削除",save:"保存",update:"更新",copied:"コピーしました",delete_success:"正常に削除されました。",save_success:"正常に保存されました",update_success:"正常に更新されました。",choose:"選ぶ",confirm:"確認",cancel:"キャンセル",delete_confirm:"[{{name}}] を削除してもよろしいですか?",operations:"操作",yes:"はい",no:"いいえ",clear:"消去",choose_folder:"フォルダーの選択",choose_or_input_path:"フォルダまたは入力パスを選択",disable:"無効にする",enable:"エネーブル",ok:"確認する",back:"戻る",have_account:"アカウントをお持ちですか？",go_login:"ログインに移動",close:"閉じる",no_support_now:"現在サポートされていません",empty_input:"入力してください"},t={obj:{name:"名前",size:"大きさ",modified:"変更日"},preview:{download:"ダウンロード",failed_load_img:"画像の読み込みに失敗しました",open_with:"で開く...",install:"取り付ける",installing:"インストール中","tr-install":"TrollStore","tr-installing":"TrollStore インストール中"},layouts:{list:"リスト表示",grid:"グリッドビュー",image:"画像ビュー"},no_images:"現在のフォルダに画像がありません",load_more:"さらに読み込む",no_more:"これ以上はない",input_password:"パスワードを入力してください",toolbar:{more:"もっとその",refresh:"更新",toggle_theme:"テーマを切り替える",switch_lang:"言語の切り替え",toggle_checkbox:"トグルチェックボックス",rename:"改名する",input_new_name:"新しい名前を入力","only_one-tips":"名前の変更に選択できるオブジェクトは 1 つだけです。",move:"動く",copy:"コピー",choose_dst_folder:"保存先フォルダを選択",delete:"削除","delete-tips":"選択したオブジェクトを削除してもよろしいですか?",copy_link:"リンクをコピー",preview_page:"プレビューページ",down_link:"ダウンロードリンク",encode_down_link:"ダウンロードリンクをエンコードする",mkdir:"新規フォルダ",input_dir_name:"入力フォルダ名",new_file:"新規ファイル",input_filename:"入力ファイル名",cancel_select:"選択のキャンセル",offline_download:"オフラインダウンロード","offline_download-tips":"1 行に 1 つの URL",download:"ダウンロード",batch_download:"一括ダウンロード",package_download:"パッケージ化とダウンロード",package_download_disabled:"パッケージ化されたダウンロードは無効です",send_aria2:"Aria2に送る",aria2_not_set:"aria2 rpc url を設定する",send_aria2_success:"aria2に正常に送信しました","pre_package_download-tips":"パッケージのダウンロードにサーバーの代わりにブラウザーで streamsaver を使用するには、cors をサポートするための対応するストレージが必要であり、サポートされていないストレージは失敗します。","package_download-tips":"お待ちください。 ページを閉じない",upload:"アップロード",local_settings:"ローカル設定",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",regex_rename:"Regex Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line."},upload:{add_as_task:"タスクとして追加","upload-tips":"ここにファイルをドラッグしてアップロードするか、以下をクリックします。:",release:"リリースしてアップロードする",no_files_drag:"ドラッグされたファイルはありません。",upload_files:"ファイルを選択",upload_folder:"フォルダを選択",pending:"待つこと。。。",uploading:"アップロード",backending:"バックエンドでのアップロード",success:"成功",error:"エラー",back:"アップロードに戻る",clear_done:"クリア完了"},local_settings:{aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC 秘密",aria2_dir:"Aria2 ダウンロードディレクトリ"},package_download:{current_status:"現在のステータス",initializing:"初期化",fetching_struct:"フォルダー構造のフェッチ",fetching_struct_failed:"フォルダ構造の取得に失敗しました",downloading:"ファイルをダウンロードし、ページを閉じたり更新したりしない",failed:"パッケージのダウンロードに失敗しました",success:"ダウンロード完了"},footer:{powered_by:"AListを搭載",manage:"取り締まる"},search:{search:"捜索",no_result:"まだ結果がありません"},fetching_settings_failed:"フェッチ設定の失敗: ",get_current_user_failed:"現在のユーザーの取得に失敗しました: ","Loading storage, please wait":"ストレージを読み込んでいます。お待ちください"},s={search_index:"検索インデックス",current:"現在のインデックス",build:"インデックスを構築する。",rebuild:"インデックスの再構築",paths_to_update:"インデックスを更新するパス",max_depth:"最大深度",update:"インデックスを更新する",obj_count:"オブジェクト数",last_done_time:"最終完了時刻",unknown:"不明です",stop:"止める",clear:"消去",error:"エラー"},d={login_to:"にログインします。","username-tips":"ユーザー名を入力してください","password-tips":"パスワードを入力してください","otp-tips":"OTPコードを入力してください",remember:"ログイン情報を記憶する",forget:"パスワードをお忘れの場合",forget_url:"https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",clear:"消去",login:"ログイン",use_guest:"観光客として閲覧する",success:"ログインしました。"},_={sidemenu:{dashboard:"コントロールパネル",settings:"設定",site:"敷地",style:"スタイル",preview:"プレビュー",global:"グローバル",other:"その他",users:"ユーザー",storages:"ストレージ",metas:"メタ情報",profile:"個人データ",about:"について",tasks:"タスク",aria2:"Aria2",upload:"アップロード",copy:"コピー","backup-restore":"バックアップ & 復元",home:"ホームページ",indexes:"インデックス",sso:"シングルサインオン",qbit:"qBittorrent",docs:"ドキュメンテーション"},title:"AList 管理",not_admin:"あなたは管理者ユーザーではありません、管理者アカウントでログインしてください。",logout_success:"ログアウトに成功しました",send:"送信",receive:"受ける",received_msgs:"受信したメッセージ","add_storage-tips":"新しく開いたタブにいくつかの情報を入力する必要がある場合があります。","messenger-tips":"プロンプトに従って、このタブにいくつかの情報を入力する必要がある場合があります。"},n={path:"パス",password:"パスワード",write:"書く",hide:"隠れる",readme:"説明",apply_sub:"サブフォルダに適用",hide_help:"1 行に 1 つの正規表現",readme_help:"サポートMarkdownコンテンツまたはMarkdownリンク"},l={allow_indexed:"インデックス化を許可",announcement:"サイト告知",aria2_secret:"Aria2シークレット",aria2_uri:"Aria2 uri",audio_autoplay:"自動再生オーディオ",audio_cover:"オーディオカバー",audio_types:"オーディオタイプ",auto_update_index:"インデックスの自動更新",customize_body:"カスタムコンテンツ",customize_head:"カスタム ヘッダー",default_page_size:"ページあたりのデフォルト数",external_previews:"外部プレビュー",favicon:"ファビコン",filename_char_mapping:"ファイル名の文字マップ",forward_direct_link_params:"ダイレクトリンクパラメータを転送",hide_files:"隠しファイル",home_container:"メインコンテナ",home_containers:{hope_container:"Hope コンテナ",max_980px:"最大 980px"},home_icon:"ホーム アイコン",iframe_previews:"Iframe プレビュー",ignore_paths:"パスを無視","ignore_paths-tips":"1 行に 1 つのパス",image_types:"画像の種類",index_progress:"インデックスの進行状況",link_expiration:"リンクの有効期限",logo:"ロゴ",main_color:"主色",max_index_depth:"最大インデックスの深さ","max_index_depth-tips":"インデックスの最大深度",ocr_api:"Ocr api",package_download:"パッケージ化とダウンロード",pagination_type:"ページネーションタイプ",pagination_types:{all:"すべての",auto_load_more:"より自動的にロードする",load_more:"さらに読み込む",pagination:"ページネーション"},privacy_regs:"プライバシー コンテンツの正規表現",proxy_ignore_headers:"エージェントはヘッダーを無視します",proxy_types:"プロキシの種類",qbittorrent_seedtime:"Qbittorrent シードタイム",qbittorrent_url:"Qbittorrent リンク",search_index:"検索インデックス",search_indexs:{bleve:"Bleve",database:"データベース",database_non_full_text:"データベース （非全文検索）",none:"何一つ"},settings_layout:"設定レイアウト",settings_layouts:{list:"リスト",responsive:"応答"},sign_all:"すべて署名",site_title:"サイトタイトル",sso_application_name:"Sso application name",sso_client_id:"Sso クライアント id",sso_client_secret:"Sso クライアント シークレット",sso_endpoint_name:"Sso endpoint name",sso_jwt_public_key:"Sso jwt public key",sso_login_enabled:"Sso ログインが有効",sso_login_platform:"Sso ログイン プラットフォーム",sso_login_platforms:{Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft"},sso_organization_name:"Sso organization name",text_types:"テキストの種類",token:"トークン",version:"バージョン",video_autoplay:"動画の自動再生",video_types:"動画の種類"},c={aria2:"Aria2",aria2_version:"Aria2 バージョン:",set_aria2:"設定aria2",copy_token:"トークンをコピー",reset_token:"トークンをリセット",reset_token_success:"トークンのリセットに成功しました",unknown_type:"不明な型です",set_qbit:"qBittorrentを設定する",qbittorrent:"qBittorrent"},p={common:{mount_path:"マウント・パス",driver:"ドライブ",order:"シリアル番号","order-tips":"並べ替えに使用",status:"状態",remark:"注記",cache_expiration:"キャッシュの有効期限","cache_expiration-tips":"このストアのキャッシュ有効期限 (分)",down_proxy_url:"プロキシ URL のダウンロード",web_proxy:"Web 代理",webdav_policy:"WebDAV ポリシー",webdav_policys:{"302_redirect":"302 リダイレクト",use_proxy_url:"プロキシ URL を使用",native_proxy:"ネイティブプロキシ"},order_by:"並べ替え",order_bys:{name:"名前",size:"大きさ",modified:"変更日"},order_direction:"並べ替え方法",order_directions:{asc:"昇順",desc:"降順"},extract_folder:"フォルダーの抽出",extract_folders:{front:"前面に抽出",back:"奥に抽出"},enable_sign:"署名を有効にする"},other:{start_load_success:"読み込みを開始",load_all:"すべてリロード",filter_by_driver:"ドライブで絞り込む"}},u={aria2_down:"ファイルをローカルデバイスにダウンロードします",aria2_transfer:"ダウンロードしたファイルを対応するストレージに転送する",qbit_down:"ファイルをローカルデバイスにダウンロードします",qbit_transfer:"ダウンロードしたファイルを対応するストレージに転送する",upload:"対応するストレージにファイルをアップロードする",copy:"ストレージから別のストレージにファイルをコピーする",done:"完了",undone:"稼働中···",pending:"ペンディング···",running:"稼働中···",canceling:"キャンセル···",succeeded:"成功",canceled:"キャンセル",errored:"エラー",clear_succeeded:"クリアに成功しました",retry:"リトライ"},m={permissions:{see_hides:"あなたは隠されたものを見ることができます",access_without_password:"パスワードアクセスは不要",offline_download:"オフラインダウンロードタスクを追加する",write:"ディレクトリを作成するか、アップロードします",rename:"改名する",move:"動く",copy:"コピー",delete:"削除",webdav_read:"Webdav 読み取り",webdav_manage:"Webdav 管理"},username:"ユーザー名",password:"パスワード",base_path:"基本パス",role:"役割",permission:"許可",disabled:"無効化済み",available:"利用できる",update_profile:"プロファイルの更新",update_profile_success:"プロファイルを正常に更新しました。再ログインしてください。",change_username:"ユーザー名の変更",change_password:"パスワードの変更","change_password-tips":"パスワードを変更したくない場合は、パスワードを空のままにします",enable_2fa:"2要素認証を有効にする",cancel_2fa:"2FAをキャンセルする",cancel_2fa_success:"2FAを正常にキャンセルする","2fa_already_enabled":"二要素認証が有効になっている",scan_qr:"QRコードをスキャンしてキーを保存します",input_code:"2 段階認証アプリに表示される確認コードを入力します。",verify:"確かめる","guest-tips":"あなたは現在ゲストとして訪問しています。",modify_nothing:"因此，您无法更改管理页面上的任何内容。",sso_login:"シングルサインオン",connect_sso:"シングルサインオンプラットフォームを接続する",disconnect_sso:"シングルサインオンプラットフォームの切断"},h=Object.assign({"./br.json":o,"./drivers.json":i,"./global.json":a,"./home.json":t,"./index.json":r,"./indexes.json":s,"./login.json":d,"./manage.json":_,"./metas.json":n,"./settings.json":l,"./settings_other.json":c,"./storages.json":p,"./tasks.json":u,"./users.json":m}),f=e("default",{});for(var g in h)f[g.split("/")[1].split(".")[0]]=h[g]}}}));
