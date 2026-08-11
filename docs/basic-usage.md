---
sidebar_position: 4
title: 基本操作
description: 葉巻のカット、着火、吸引、灰落とし、リセットの操作方法
---

import ClickableImage from '@site/src/components/ClickableImage';

# 基本操作

## 0. 葉巻をカットする（オプション）

:::info
この操作を行わなくても、葉巻に着火すると吸い口は自動的にフラットカットになります。

カットから楽しむ際に行ってみてください。

フラットカットとパンチカットでは、ポストプロセスの変化量が異なります。
:::

- `Cutter.prefab`—はさみの形をしたフラットカット用の道具
- `PunchCutter.prefab`—パンチカット用の道具

|  |  |
| :---: | :---: |
| <ClickableImage src="/img/cutter-prefab.png" alt="Cutter.prefab" /> | <ClickableImage src="/img/punch-cutter-prefab.png" alt="PunchCutter.prefab" /> |
| `Cutter.prefab` | `PunchCutter.prefab` |

`Cutter`または`PunchCutter`をPickupし、葉巻の吸い口に近づけてUseします。

<ClickableImage src="/img/cigar-cut-operation.png" alt="Cutterで葉巻をカットする操作" />

## 1. ライターを点火する

`Lighter`をPickupし、Useすると火が出ます。火を葉巻の先端へ当てると着火します。

<ClickableImage src="/img/cigar-ignite-operation.png" alt="ライターで葉巻へ着火する操作" />

## 2. 葉巻を吸う

着火した`Cigar`をPickupし、Useを押している間、吸引状態になります。

<ClickableImage src="/img/cigar-smoking-operation.png" alt="葉巻を吸う操作" />

## 3. 灰を落とす

葉巻を短い間隔で2回Useすると、分離可能になった灰が落ちます。灰皿の上でトントンしましょう。

<ClickableImage src="/img/cigar-ash-removal.png" alt="葉巻の灰を落とす操作" />

## 4. リセットする

`CigarResetter`が付いたColliderへ葉巻を触れさせると、葉巻は初期状態へ戻ります。

<ClickableImage src="/img/cigar-resetter.png" alt="葉巻をリセットするオブジェクト" />

リセット用のオブジェクト`Resetter.prefab`は、`Assets/mikinel/Cigar/Prefabs/Resetter.prefab`にあります。
