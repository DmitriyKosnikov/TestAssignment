# README

## Задание 
1.	Создать Ruby on Rails приложение, с использованием ruby 3.4.* и rails  7.0.* Используемая БД MariaDB или PostgreSQL.
2.	Создать две модели, связанные между собой связью один ко многим. Название моделей не принципиально, допускается условное наименование моделей, например Foo, Bar 
3.	Реализовать CRUD функционал для данных моделей. Стилистика и разметка не важна, но должна выводить данные в читаемом виде.
4.	Подключить JS фреймворк Stimulus используя importmap.
5.	Реализовать, используя JS фреймворк Stimulus, контроллер выполняющий запрос данных на сервере и последующий их вывода. Например, сабмит формы, или вывод табличных данных, или пагинация. 
6.	В случае необходимости, для демонстрации правильности выполнения тестового задания, создать db:seed для оперативного заполнения тестовыми данных БД. 

---

### Версии Ruby и Rails
- Ruby `3.4.3`
- Rails `7.1.5.1`

---
### Сущности
- User (имя, возраст, дата рождения)
- Post(заголовок, тело, id пользователя)
---
### Stimulus контроллеры
- `post_form_controller.js` контроллер для сабмит-формы на создание постов
- `pagination_controller.js` контроллер для пагинации постов на root странице.
