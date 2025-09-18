## 2025 年 9 月 18 日

## 作業内容

・お問い合わせCTA コーディング<br>
・フッター コーディング

## ポイント
・親要素に height を指定して基準を固定
・子要素（左右カラム）を flex-direction: column に設定
・justify-content: space-between を指定し、上部と下部の要素を均等配置
・これにより、左カラム（ロゴ・住所など）と右カラム（ナビ・コピーライトなど）が下端で揃う

## HTML
   <!-- フッター -->
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__left">

                <!-- ロゴ -->
                <div class="footer__logo">
                    <p class="footer__groupActivities">自然・動物保護団体</p>
                    <h2 class="footer__logoTitle">いのちの和</h2>
                </div>

                <!-- 団体情報 -->
                <ul class="footer__groupInformation">
                    <li class="groupnformationItem">
                        <span class="postcode">〒596-0814</span><br>
                        <span class="address">大阪府岸和田岡山町297-8</span>
                    </li>
                    <li class="groupnformationItem">
                        <a href="tel:000-0000-0000">
                            <span class="icon"><img src="img/common/phone-icon.png" alt=""></span>
                            <span class="text">000-0000-0000</span>
                        </a>
                    </li>
                    <li class="groupnformationItem">
                        <a href="mailto:marujljaaa.com">
                            <span class="icon"><img src="img/common/mail-icon.png" alt=""></span>
                            <span class="text">marujljaaa.com</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__right">
                <nav class="footer__nav">
                    <ul class="footer__navList">
                        <li class="footer__navItem"><a href="index.html">トップ</a></li>
                        <li class="footer__navItem"><a href="news.html">お知らせ</a></li>
                        <li class="footer__navItem"><a href="initiative.html">私たちの取り組み</a></li>

                        <!-- ナビゲーション お問い合わせボタン -->
                        <li class="footer__navItem">
                            <a href="contact.html">
                                お問い合わせ
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- コピーライト -->
                <small class="copyRight">© 2025 いのちの和 All rights reserved.</small>
            </div>
        </div>
    </footer>

## scss
// ==========================================================================
// フッター 900px~ pc
// ==========================================================================
@include mq(l) {
  .footer {
    height: min(50vh, 360px);
    display: flex;
    align-items: center;
    padding: 0;

    &__wrapper {
      @include flex__row;
      justify-content: space-between;
      height: 60%;
    }

    // リンクをホバー時、透過
    a {
      transition: all 0.4s;

      &:hover {
        opacity: 0.7;
      }
    }
    // 左のコンテンツ
    &__left {
      height: 100%;
      @include flex__column;
      justify-content: space-between;
    }

    // ロゴ
    &__logo {
      margin: 0;
    }

    .groupnformationItem {
      font-size: clamp(10px, 1vw, 16px);

      a {
        font-size: clamp(11px, 1.2vw, 17px);
        column-gap: clamp(4px, 0.4vw, 8px);
      }

      // アイコン
      .icon {
        width: clamp(11px, 1.2vw, 17px);
      }
    }

    // 右のコンテンツ
    &__right {
      @include flex__column;
      justify-content: space-between;
      height: 100%;
    }

    // ナビゲーション
    &__nav {
      &List {
        @include flex__row;
        row-gap: 0;
        column-gap: clamp(32px, 3.5vw, 64px);
      }

      &Item a {
        color: #fff;
        font-size: clamp(11px, 1.2vw, 18px);
        font-weight: 500;
      }
    }

    // コピーライト
    .copyRight {
      font-size: clamp(10px, 1.1vw, 14px);
      width: 100%;
      text-align: right;
    }
  }
}
