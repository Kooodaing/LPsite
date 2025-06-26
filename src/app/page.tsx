'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              たった 1 日で、売れる LP が届く。
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              バイブコーディング×職人技で、ノーコードツールでは出せない没入感を。
            </p>
            <Link
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
            >
              最短納品を相談する
            </Link>
          </div>
        </div>
      </section>

      {/* Vibecoding Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            バイブコーディングとは？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">コードのバイブスを型化</h3>
              <p className="text-gray-600">要素を自由に組み替えられる最新フレームワーク</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">独自UI/UX量産</h3>
              <p className="text-gray-600">既存テンプレに縛られず、独自デザインを実現</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">高速制作</h3>
              <p className="text-gray-600">Figma → コード化の工程を圧縮し、24時間以内に完了</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            LP速達便の特徴
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">項目</th>
                  <th className="px-6 py-3 text-center">格安ノーコード</th>
                  <th className="px-6 py-3 text-center">一般的な外注</th>
                  <th className="px-6 py-3 text-center">LP速達便</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">初期費用</td>
                  <td className="px-6 py-4 text-sm text-center">0〜5 万円</td>
                  <td className="px-6 py-4 text-sm text-center">20〜100 万円</td>
                  <td className="px-6 py-4 text-sm text-center text-orange-600 font-semibold">5 万円〜</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">納期</td>
                  <td className="px-6 py-4 text-sm text-center">1〜3 日</td>
                  <td className="px-6 py-4 text-sm text-center">14〜30 日</td>
                  <td className="px-6 py-4 text-sm text-center text-orange-600 font-semibold">最短 1 日</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">カスタマイズ性</td>
                  <td className="px-6 py-4 text-sm text-center">低</td>
                  <td className="px-6 py-4 text-sm text-center">高</td>
                  <td className="px-6 py-4 text-sm text-center text-orange-600 font-semibold">高 (制限なし)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            お問い合わせ
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">お名前</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">メールアドレス</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">希望納期</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">参考URL / イメージ</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">その他ご要望</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">© 2025 LP速達便 / 運営: 株式会社○○</p>
            <p className="text-sm">特商法表記 / プライバシーポリシー</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
