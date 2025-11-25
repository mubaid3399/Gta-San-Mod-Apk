import json
import os

# Read English and Spanish forPC sections as templates
with open('messages/es.json', 'r', encoding='utf-8') as f:
    es_data = json.load(f)
    forpc_template = es_data.get('forPC', {})

# Translations for the remaining languages
translations = {
    'fr.json': {
        'hero.title': 'GTA San Andreas Pour PC',
        'hero.subtitle': 'Vivez l\'Aventure de Jeu Ultime',
        'storySection.title': 'Voyage de l\'Histoire Complète de GTA San Andreas',
        'storySection.introduction': 'Découvrez la narr ative épique de Carl "CJ" Johnson alors qu\'il retourne à Los Santos pour reconstruire son gang et sauver sa famille. Ceci est un guide complet de l\'histoire la plus emblématique du jeu.',
    },
    'it.json': {
        'hero.title': 'GTA San Andreas Per PC',
        'hero.subtitle': 'Vivi l\'Avventura di Gioco Definitiva',
        'storySection.title': 'Viaggio della Storia Completa di GTA San Andreas',
        'storySection.introduction': 'Scopri la narrativa epica di Carl "CJ" Johnson mentre ritorna a Los Santos per ricostruire la sua gang e salvare la sua famiglia. Questa è una guida completa della storia più iconica del gioco.',
    },
    'pt.json': {
        'hero.title': 'GTA San Andreas Para PC',
        'hero.subtitle': 'Experimente a Aventura de Jogo Definitiva',
        'storySection.title': 'Jornada da História Completa de GTA San Andreas',
        'storySection.introduction': 'Descubra a narrativa épica de Carl "CJ" Johnson enquanto ele retorna a Los Santos para reconstruir seu gang e salvar sua família. Este é um guia completo da história mais icônica do jogo.',
    },
    'ru.json': {
        'hero.title': 'GTA San Andreas Для ПК',
        'hero.subtitle': 'Испытайте Исключительное Игровое Приключение',
        'storySection.title': 'Полное Путешествие Истории GTA San Andreas',
        'storySection.introduction': 'Откройте для себя эпическую историю Карла "CJ" Джонсона, когда он возвращается в Лос-Santos, чтобы восстановить его банду и спасить свою семью. Это полное руководство по самой культовой истории игры.',
    },
    'ja.json': {
        'hero.title': 'GTA San Andreas PC版',
        'hero.subtitle': '究極のゲーム アドベンチャーを体験する',
        'storySection.title': 'GTA San Andreas完全なストーリー旅',
        'storySection.introduction': 'ロスサントスに戻り、ギャングを再構築し、家族を救うために戻ってくるカール"CJ"ジョンソンの壮大な物語を発見してください。これはゲームの最も象徴的な物語の完全なガイドです。',
    }
}

# For each language file, add the forPC section before the missions section
files_to_update = ['fr.json', 'it.json', 'pt.json', 'ru.json', 'ja.json']

for filename in files_to_update:
    filepath = f'messages/{filename}'
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Add the forPC section (we'll use Spanish as template for now)
    if 'forPC' not in data:
        data['forPC'] = forpc_template
    
    # Rewrite the file
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f'✓ Added forPC section to {filename}')

print('Done!')
