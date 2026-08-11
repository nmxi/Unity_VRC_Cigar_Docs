---
sidebar_position: 2
title: 導入手順
description: Mikinel Cigar SystemをUnityプロジェクトへ導入する手順
---

import ClickableImage from '@site/src/components/ClickableImage';

# 導入手順

## 動作環境

現在のギミックは、次の環境で制作されています。ここに記載したものは動作確認に使用したバージョンです。

| 項目 | バージョン |
| --- | --- |
| Unity | 2022.3.22f1 |
| VRChat SDK - Worlds | 3.10.4 |
| VRCLightVolumes | 2.1.3 |
| lilPBR | 1.0.0 |

### 依存パッケージの追加

Mikinel Cigar Systemをインポートすると、Unity上に`Mikinel Cigar System`のSplash Screenが表示されます。閉じた場合は、Unityのメニューから`MikinelTools > Mikinel Cigar System > Splash Screen`を選択すると再度表示できます。

<ClickableImage src="/img/cigar-splash-screen-dependencies.png" alt="Splash Screenの依存パッケージ追加画面" imageClassName="dependencyImage" />

`lilPBR`は必須パッケージです。Splash Screenの「依存パッケージ」から、次の手順で追加してください。

1. 「lilxyzw Community Repositoryを登録」を押します。
2. リポジトリの登録完了後、「lilPBRをこのプロジェクトに追加」を押します。
3. 「lilPBRはプロジェクトに追加されています。」と表示されることを確認します。

`VRC Light Volumes`は任意パッケージです。使用する場合は、同じ画面から「RED_SIM Community Repositoryを登録」を押した後、「VRC Light Volumesをこのプロジェクトに追加」を押してください。

すべての依存パッケージを追加した後、Splash Screenに「"lilPBR"はプロジェクトに追加されています。」と「"VRC Light Volumes"はプロジェクトに追加されています。」が表示されていれば、依存パッケージの追加は完了です。

<ClickableImage src="/img/cigar-splash-screen-dependencies-complete.png" alt="すべての依存パッケージを追加した後のSplash Screen" imageClassName="dependencyImage" />

## 1. ワールドプロジェクトを準備する

VRChat Creator CompanionでWorldsプロジェクトを作成するか、導入先の既存ワールドを開きます。

## 2. Cigarをインポートする

Mikinel Cigar Systemのunitypackageをプロジェクトへインポートします。インポート後、Projectウィンドウで次のフォルダーが確認できれば完了です。

```text
Assets/mikinel/Cigar/
├─ Prefabs/
├─ Scripts/
├─ Shaders/
└─ DataStore/
```

<ClickableImage src="/img/cigar-project-folder.png" alt="インポート後のCigarアセットのフォルダー構成" />

## 3. Prefabの配置

以下のPrefabをProjectウィンドウの`Assets/mikinel/Cigar/Prefabs`からシーン上に配置します。

- `Cigar.prefab`—葉巻本体
- `Lighter.prefab`—着火用ターボライター
- `AshTray.prefab`—灰皿
- `Cutter.prefab`または`PunchCutter.prefab`—葉巻の吸い口をカットするための道具
- `CigarBox.prefab`—複数の葉巻を収納可能なシガーボックス
- `Resetter.prefab`—葉巻を初期状態へ戻すためのリセット用オブジェクト

:::caution 葉巻の配置数について
動作検証では、葉巻を12本配置して確認を行いました。配置できる葉巻の数に上限はありませんが、本数が多くなるほど負荷が大きくなるため、必要な本数のみ配置することを推奨します。
:::

<ClickableImage src="/img/cigar-prefab-placement.png" alt="Cigar関連Prefabの配置例" />

## 4. アップロードと動作確認

配置後、ワールドをアップロードし動作を確認してください。
