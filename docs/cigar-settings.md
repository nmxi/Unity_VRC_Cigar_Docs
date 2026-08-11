---
sidebar_position: 6
title: カスタマイズ
description: CigarConfigurationでビルド時に適用する葉巻の設定項目
---

import ClickableImage from '@site/src/components/ClickableImage';

# カスタマイズ

`Cigar.prefab`内の`CigarConfiguration`から、葉巻へ適用する主な設定を変更できます。

## Cigarの設定

| Inspector項目 | 内容 | 既定値 | 設定範囲 |
| --- | --- | --- | --- |
| Burn Duration (Seconds) | 通常燃焼で葉巻が燃え切るまでの基準時間です。 | 600秒 | 30～3600秒 |
| Burn Speed Boost Multiplier | 吸引中に適用される燃焼速度の倍率です。 | 2倍 | 1～10倍 |
| Auto Extinguish Delay (Seconds) | 葉巻を放置した際の自動鎮火判定に使用される待機時間です。 | 180秒 | 10～3600秒 |
| Enable Post Process | 吸引時のPost Process効果を有効にします。 | 有効 | — |

:::info
`Ignore This Settings`を有効にすると、`Cigar Controller`より下にある設定項目はInspector上で無効になります。再度設定を適用する場合は、`Ignore This Settings`を無効にしてください。
:::

<ClickableImage src="/img/cigar-configuration-inspector.png" alt="Cigar ConfigurationのInspector" />
