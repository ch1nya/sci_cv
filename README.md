# sci_cv

Статический сайт портфолио для размещения резюме, навыков и проектов.

## Структура

```
sci_cv/
├── index.html      # Главная страница
├── styles.css      # Стили
├── script.js       # Логика
├── assets/         # Изображения (аватар, проекты)
└── README.md       # Этот файл
```

## Локальный запуск

```bash
python3 -m http.server 8000
# откроется по адресу http://localhost:8000
```

## Развёртывание на GitHub Pages

1. Репозиторий: `https://github.com/ch1nya/sci_cv`
2. В настройках репозитория `Settings → Pages`:
   - Source: `Deploy from a branch`
   - Branch: `main`, Folder: `/root`
3. Сайт доступен по адресу: `https://ch1nya.github.io/sci_cv`

## Локальный деплой (cold start)

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ch1nya/sci_cv.git
git push -u origin main
```
