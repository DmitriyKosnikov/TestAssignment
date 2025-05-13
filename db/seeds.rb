15.times do
  User.create!(
    name: Faker::Name.name,
    age: [18..80].sample,
    birthday: Faker::Date.birthday(min_age: 18, max_age: 80)
  )
end


120.times do
  Post.create!(
    title: Faker::Lorem.sentence(word_count: 4),
    body: Faker::Lorem.paragraph(sentence_count: 2),
    user_id: User.all.sample.id
  )
end