var offset = 0;
var rpp = 9;
var pets = [
    {
        name: "Baxter",
        type: "Dog",
        image: "images/beagle.jpg",
        breed: "Beagle",
        sex: "Male",
        color: "Tri-color (Black, Brown, White)",
        fixed: "Yes",
        age: 5,
        animal_id: 34621,
        microchip_num: 982000364789210,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter was rescued from a shelter and has blossomed into a friendly and outgoing boy. He loves long walks and has a keen sense of smell. He's great with kids and other dogs, making him the perfect family pet. His favorite pastime is chasing squirrels in the park and curling up for naps. Baxter is looking for a loving home where he can share his endless affection and playful spirit.`
    },
    {
        name: "Teddy",
        type: "Dog",
        image: "images/poodle_teddy.jpg",
        breed: "Poodle",
        sex: "Male",
        color: "Apricot",
        fixed: "Yes",
        age: 2,
        animal_id: 70491,
        microchip_num: 982000395678945,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Say hi to Teddy, a charming Apricot Poodle with a curly coat and an endearing personality. Teddy is 
                playful and affectionate, always ready for a game of fetch or a long walk in the park. He's intelligent and easy 
                to train, making him a joy to have around. Teddy thrives on companionship and would do best in a home where he 
                receives plenty of attention and interaction. With his lovable nature, Teddy is sure to bring endless joy to his 
                new family.`
    },
    {
        name: "Rosie",
        type: "Dog",
        image: "images/cocker_spaniel_rosie.webp",
        breed: "Cocker Spaniel",
        sex: "Female",
        color: "Golden",
        fixed: "Yes",
        age: 3,
        animal_id: 84756,
        microchip_num: 982000423456789,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Meet Rosie, a charming Cocker Spaniel with a beautiful golden coat and soulful eyes. 
                Rosie is as sweet as can be, with a gentle and affectionate nature. She loves 
                cuddling with her humans and enjoys leisurely walks in the park. Rosie is also 
                great with children and other pets, making her an ideal family companion. She's 
                looking for a loving home where she can shower her new family with love and affection.`
        
    },
    {
        name: "Oliver",
        type: "Cat",
        image: "images/siamese.jpg",
        breed: "Siamese",
        sex: "Male",
        color: "Seal Point",
        fixed: "Yes",
        age: 2,
        animal_id: 62894,
        microchip_num: 981120025678902,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Oliver is a sleek Siamese cat with striking blue eyes and a seal point
                coat. Found wandering in a neighborhood, he's adapted well to shelter life but is eager
                for a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoys
                interactive playtime. He's affectionate and loves to be close to his human companions,
                often following them around the house. Oliver would do best in a home where he can
                receive plenty of attention and love.`
        
    },
    {
        name: "Max",
        type: "Dog",
        image: "images/labrador_retriever.jpg",
        breed: "Labrador Retriever",
        sex: "Male",
        color: "Chocolate",
        fixed: "Yes",
        age: 4,
        animal_id: 47920,
        microchip_num: 985120031478902,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Max is a charming Chocolate Labrador with a love for life and a tail that never
                stops wagging. Rescued from an overcrowded shelter, Max has shown immense
                gratitude and loyalty to his caregivers. He is full of energy and would thrive in a
                home with a backyard or regular access to outdoor activities. Max is great with
                children and other dogs, and he's always up for a game of fetch or a leisurely
                walk. His ideal home would be with an active family who can match his energy
                and zest for life.`
        
    },
    {
        name: "Daisy",
        type: "Cat",
        image: "images/persian.jpg",
        breed: "Persian",
        sex: "Female",
        color: "White",
        fixed: "Yes",
        age: 5,
        animal_id: 58329,
        microchip_num: 981120036712345,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor.
                She was surrendered by an owner who could no longer care for her. Daisy is a bit
                of a diva and loves being the center of attention. She enjoys being groomed and
                will happily sit in your lap for hours. She's not fond of loud noises or fast
                movements, so a quiet and calm household would be ideal. Daisy is looking for a
                loving home where she can be pampered and adored.`
        
    },
    {
        name: "Charlie",
        type: "Dog",
        image: "images/dachshund.jpg",
        breed: "Dachshund",
        sex: "Male",
        color: "Dapple (Black and Gray)",
        fixed: "Yes",
        age: 3,
        animal_id: 59583,
        microchip_num: 982000367829101,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Charlie is a spirited Dapple Dachshund with a playful personality. He was found
                as a stray and has since shown an incredible zest for life. Charlie loves exploring,
                whether it's a new trail or the corners of his home. He's a bit mischievous and
                enjoys hiding his toys. Charlie would do well in a home with an individual or
                family who enjoys fun and adventure. He's small but has a big heart and a lot of
                love to give.`
        
    },
    {
        name: "George",
        type: "Cat",
        image: "images/british_shorthair.jpg",
        breed: "British Shorthair",
        sex: "Male",
        color: "Blue (Gray)",
        fixed: "Yes",
        age: 4,
        animal_id: 61029,
        microchip_num: 985112007651234,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `George is a robust British Shorthair with a striking blue-gray coat and a calm,
                dignified demeanor. Rescued from a busy city environment, he's adapted well to
                a quieter life.
                George enjoys leisurely days, lounging in sunny spots, and watching the world go by.
                He's not overly demanding for attention but appreciates a good chin scratch and will
                purr loudly in response. George is a bit reserved at first but becomes a loyal companion
                once he feels comfortable. He would be perfect for someone seeking a low-
                maintenance, independent cat.`
        
    },
    {
        name: "Bella",
        type: "Dog",
        image: "images/boxer.jpg",
        breed: "Boxer",
        sex: "Female",
        color: "Fawn with white markings",
        fixed: "Yes",
        age: 6,
        animal_id: 50824,
        microchip_num: 982000360234567,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Bella is a spirited Boxer with a fawn coat and charming white markings. She was
                rescued from a neglectful situation and has shown immense love and gratitude
                to her caregivers. Bella is energetic and playful, enjoying activities like running
                and playing fetch. She's great with older children and would thrive in a home
                where she can be active and engaged. Bella has a big personality and would be a
                fantastic companion for someone who loves adventure and fun.`
        
    },
    {
        name: "Sophie",
        type: "Cat",
        image: "images/ragdoll.jpg",
        breed: "Ragdoll",
        sex: "Female",
        color: "Blue eyes with seal point",
        fixed: "Yes",
        age: 1,
        animal_id: 63845,
        microchip_num: 985112008765432,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Sophie is a young Ragdoll cat with a soft seal point coat and mesmerizing blue
                eyes. She was found as a kitten and raised in a foster home. Sophie is incredibly
                affectionate, often seeking out laps to curl up in. She's playful and enjoys
                interactive toys, but she's also content to relax and watch the world go by. Sophie
                gets along well with other pets and would be an excellent addition to a loving
                family or individual looking for a gentle and loving companion.`
        
    },
    {
        name: "Lucy",
        type: "Dog",
        image: "images/Shih_tzu_lucy.jpg",
        breed: "Shih Tzu",
        sex: "Female",
        color: "White and Tan",
        fixed: "Yes",
        age: 5,
        animal_id: 94628,
        microchip_num: 982000387654321,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Say hello to Lucy, a delightful Shih Tzu with a fluffy white and tan coat. Lucy is 
                incredibly sweet-natured and enjoys being pampered. She loves gentle belly rubs and sitting on 
                laps while her humans watch TV. Lucy is well-behaved and easygoing, making her a wonderful 
                companion for individuals or families alike. She's adaptable and would thrive in a home with 
                lots of love and attention.`
        
    },
    {
        name: "Leo",
        type: "Cat",
        image: "images/bengal_leo.jpg",
        breed: "Bengal",
        sex: "Male",
        color: "Brown Spotted Tabby",
        fixed: "Yes",
        age: 4,
        animal_id: 57293,
        microchip_num: 981120049876543,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Meet Leo, a striking Bengal cat with a wild-looking brown spotted tabby coat. Leo is highly 
                energetic and loves to climb and explore his surroundings. He's intelligent and enjoys puzzle toys that 
                challenge his mind. Leo is also incredibly affectionate, often rubbing against his human's legs for 
                attention. He gets along well with other pets but would also be content as the sole feline in the 
                household. Leo is looking for a home where he can unleash his playful spirit and receive lots of love.`

    },
    {
        name: "Luna",
        type: "Cat",
        image: "images/maine_coon.jpg",
        breed: "Maine Coon",
        sex: "Female",
        color: "Grey with white markings",
        fixed: "Yes",
        age: 3,
        animal_id: 57281,
        microchip_num: 981120019776432,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Luna is a majestic Maine Coon with a fluffy grey coat and striking white markings.
                She was found as a stray and has since become a gentle and affectionate
                companion. Luna enjoys perching on windowsills, watching birds, and being the
                center of attention. She's a bit shy at first but warms up quickly, especially if you
                have treats! Luna would thrive in a calm environment where she can relax and be
                pampered like the queen she is.`
        
    },
    {
        name: "Simba",
        type: "Cat",
        image: "images/persian_simba.jpg",
        breed: "Persian",
        sex: "Male",
        color: "Cream",
        fixed: "Yes",
        age: 3,
        animal_id: 76932,
        microchip_num: 985120056789012,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Introducing Simba, a regal Persian cat with a luxurious cream-colored coat. Simba is as majestic as his name 
                suggests, with a calm and dignified demeanor. He enjoys lounging in sunny spots and receiving gentle pets from his humans. 
                Simba is a bit of a homebody, preferring the comfort of indoor life over outdoor adventures. He's looking for a quiet and 
                loving home where he can reign as king of the household.`
        
    },
    {
        name: "Bella",
        type: "Dog",
        image: "images/border_collie_bella.jpg",
        breed: "Border Collie",
        sex: "Female",
        color: "Black and White",
        fixed: "Yes",
        age: 4,
        animal_id: 83215,
        microchip_num: 982000401234567,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Meet Bella, a brilliant Border Collie with a striking black and white coat. Bella is highly intelligent 
                and thrives on mental stimulation. She excels in obedience training and enjoys activities that challenge 
                her mind, such as puzzle toys and agility courses. Bella is also incredibly loyal and forms strong bonds 
                with her family members. She's looking for an active household where she can participate in plenty of outdoor 
                activities and receive the mental stimulation she craves.`
        
    },
    {
        name: "Cleo",
        type: "Cat",
        image: "images/tortoiseshell_cleo.jpg",
        breed: "Exotic Shorthair",
        sex: "Female",
        color: "Tortoiseshell",
        fixed: "Yes",
        age: 5,
        animal_id: 91573,
        microchip_num: 985120067890123,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Say hello to Cleo, a charming Exotic Shorthair with a beautiful tortoiseshell coat. Cleo is known 
                for her affectionate nature and laid-back personality. She enjoys lounging in cozy spots around 
                the house and receiving chin scratches from her humans. Cleo is sociable and gets along well with 
                children and other pets. She's looking for a loving home where she can relax and be pampered like 
                the royalty she is.`
        
    },
    {
        name: "Rocky",
        type: "Dog",
        image: "images/jack_russell_terrier_rocky.jpg",
        breed: "Jack Russell Terrier",
        sex: "Male",
        color: "Tricolor (White, Brown, Black)",
        fixed: "Yes",
        age: 6,
        animal_id: 67845,
        microchip_num: 982000412345678,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Meet Rocky, a spirited Jack Russell Terrier with a tricolor coat and boundless energy. 
                Rocky is known for his feisty personality and adventurous spirit. He loves exploring 
                his surroundings and going on long walks with his humans. Rocky is also highly intelligent 
                and enjoys learning new tricks. He's looking for an active family who can keep up with 
                his energetic nature and provide him with plenty of love and stimulation.`
        
    },
    {
        name: "Loki",
        type: "Cat",
        image: "images/norweigian_forest_loki.jpg",
        breed: "Norweigian Forest Cat",
        sex: "Male",
        color: "Tabby and White",
        fixed: "Yes",
        age: 4,
        animal_id: 72983,
        microchip_num: 985120078901234,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Introducing Loki, a magnificent Norwegian Forest Cat with a striking tabby 
                and white coat. Loki is known for his strong and muscular build, as well 
                as his playful and affectionate nature. He enjoys interactive play sessions 
                with his humans and chasing after feather toys. Loki is also an excellent 
                climber and loves perching in high places to survey his domain. He's looking 
                for a loving home where he can receive plenty of attention and playtime.`
        
    },
    {
        name: "Sandy",
        type: "Dog",
        image: "images/golden_retriever.jpg",
        breed: "Golden Retriever",
        sex: "Female",
        color: "Golden",
        fixed: "Yes",
        age: 7,
        animal_id: 41382,
        microchip_num: 985112004567890,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Sandy is a heartwarming Golden Retriever with a golden coat as bright as her
                personality. Rescued from a neglectful situation, she has shown incredible
                resilience and love for life. Sandy is great with children and other pets, making
                her an ideal family dog. She enjoys outdoor adventures, especially swimming and
                fetching. Sandy is looking for a forever home where she can spread her joy and
                love.`
        
    },
    {
        name: "Bettie",
        type: "Cat",
        image: "images/siamese_bettie.jpg",
        breed: "Siamese",
        sex: "Female",
        color: "Chocolate Point",
        fixed: "Yes",
        age: 2,
        animal_id: 98652,
        microchip_num: 985120089012345,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Say hi to Bettie, a stunning Siamese cat with a luxurious chocolate point coat. 
                Bettie is known for her striking blue eyes and vocal nature. She loves expressing 
                her thoughts through meows and enjoys engaging in conversations with her humans. 
                Bettie is affectionate and enjoys snuggling up on the couch while her humans 
                watch TV. She's looking for a loving home where she can be the center of attention 
                and receive plenty of affection.`
        
    },
    {
        name: "Maxwell",
        type: "Dog",
        image: "images/german_shepherd_maxwell.webp",
        breed: "German Shepherd",
        sex: "Male",
        color: "Sable",
        fixed: "Yes",
        age: 5,
        animal_id: 73419,
        microchip_num: 982000434567890,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Meet Maxwell, a loyal German Shepherd with a handsome sable coat and a heart of gold. Max is 
                known for his intelligence and loyalty to his family. He's highly trainable and excels 
                in obedience training and agility courses. Maxwell is also protective of his loved ones and 
                makes an excellent watchdog. Despite his strong and confident demeanor, Max is gentle 
                and affectionate with his family members. He's looking for a loving home where he can 
                be a loyal companion and protector.`
        
    },
    {
        name: "Ollie",
        type: "Cat",
        image: "images/ragamuffin_ollie.jpg",
        breed: "Ragamuffin",
        sex: "Male",
        color: "Blue Mitted",
        fixed: "Yes",
        age: 3,
        animal_id: 65291,
        microchip_num: 985120090123456,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Introducing Ollie, a handsome Ragamuffin cat with a striking blue mitted coat. Ollie 
                is known for his laid-back and affectionate nature. He enjoys lounging in sunny spots 
                and receiving chin scratches from his humans. Ollie is also playful and enjoys batting 
                at feather toys and chasing after toy mice. He gets along well with children and other 
                pets, making him an ideal addition to any loving home.`
        
    },
    {
        name: "Cleo",
        type: "Cat",
        image: "images/calico_cleo.jpg",
        breed: "Calico",
        sex: "Female",
        color: "Calico",
        fixed: "Yes",
        age: 4,
        animal_id: 87459,
        microchip_num: 982000364789224,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Cleo is a beautiful Calico cat with a vibrant coat of orange, black, and white. She's 
                a gentle and affectionate feline who enjoys lounging in sunny spots and birdwatching from 
                the windowsill. Cleo is also playful and enjoys chasing toys and exploring her surroundings. 
                She gets along well with other pets and would make a wonderful companion for any cat lover. 
                Cleo is looking for a loving home where she can receive all the attention she deserves.`

    },
    {
        name: "Ruby",
        type: "Dog",
        image: "images/shih_tzu_ruby.jpg",
        breed: "Shih Tzu",
        sex: "Female",
        color: "Golden Brown",
        fixed: "Yes",
        age: 3,
        animal_id: 85236,
        microchip_num: 982000364789221,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Ruby is a charming Shih Tzu with a fluffy golden-brown coat and a sweet disposition. 
                She's a loving and affectionate companion who adores being by her owner's side. 
                Ruby is great with children and other pets, making her a delightful addition to 
                any family. She enjoys leisurely walks, belly rubs, and snuggling up on the couch. 
                Ruby is looking for a forever home where she can spread joy and receive all the 
                love she deserves.`

    },
    {
        name: "Mochi",
        type: "Cat",
        image: "images/scottish_fold_mochi.jpg",
        breed: "Scottish Fold",
        sex: "Female",
        color: "Blue",
        fixed: "Yes",
        age: 1,
        animal_id: 74125,
        microchip_num: 982000364789222,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Mochi is an adorable Scottish Fold with a unique blue coat and signature folded ears. 
                She's a playful and curious kitten who loves exploring her surroundings. Mochi is 
                also incredibly affectionate and enjoys cuddling up in her owner's lap. She gets 
                along well with other pets and would thrive in a loving and nurturing environment. 
                Mochi is looking for a forever home where she can grow and flourish with her new family.`

    },
    {
        name: "Milo",
        type: "Cat",
        image: "images/siberian_milo.jpg",
        breed: "Siberian",
        sex: "Male",
        color: "Red Tabby",
        fixed: "Yes",
        age: 2,
        animal_id: 86432,
        microchip_num: 982000364789216,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Milo is a playful Siberian cat with a striking red tabby coat and vibrant green eyes. 
                He was found abandoned but has quickly adapted to life with humans. Milo is curious and 
                enjoys exploring every nook and cranny of his home. He's also affectionate and loves to 
                cuddle up with his humans at the end of the day. Milo gets along well with other pets 
                and would make a wonderful addition to any loving family.`

    },
    {
        name: "Rocky",
        type: "Dog",
        image: "images/rottweiler_rocky.jpg",
        breed: "Rottweiler",
        sex: "Male",
        color: "Black and Tan",
        fixed: "Yes",
        age: 3,
        animal_id: 73254,
        microchip_num: 982000364789215,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Rocky is a handsome Rottweiler with a strong build and a heart of gold. He was rescued 
                from a neglectful situation and has since become a loyal and loving companion. Rocky is 
                intelligent and eager to please, making him a joy to train. He enjoys outdoor activities 
                like hiking and running, but he's also content to lounge at home with his family. Rocky is 
                great with children and would thrive in an active household where he can receive plenty of 
                love and attention.`

    },
    {
        name: "Buddy",
        type: "Dog",
        image: "images/goldendoodle_buddy.jpg",
        breed: "Goldendoodle",
        sex: "Male",
        color: "Apricot",
        fixed: "Yes",
        age: 2,
        animal_id: 67324,
        microchip_num: 982000364789219,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Buddy is an adorable Goldendoodle with a fluffy apricot-colored coat and a playful 
                personality. He's a social butterfly who loves everyone he meets, including other 
                pets. Buddy is always up for an adventure and enjoys outdoor activities like hiking 
                and playing fetch. He's also a great cuddle buddy and loves nothing more than snuggling 
                up with his humans on the couch. Buddy would make a wonderful addition to any loving family.`

    },
    {
        name: "Rosie",
        type: "Dog",
        image: "images/german_shepherd_rosie.jpg",
        breed: "German Shepherd",
        sex: "Female",
        color: "Black",
        fixed: "Yes",
        age: 4,
        animal_id: 93421,
        microchip_num: 982000364789217,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Rosie is a loyal German Shepherd with a stunning black coat and soulful brown eyes. She's 
                a gentle giant who adores her family and is fiercely protective of them. Rosie is intelligent 
                and easily trainable, excelling in obedience and agility tasks. She loves outdoor adventures 
                like hiking and camping but is just as happy lounging at home with her humans. Rosie is great 
                with children and would make a devoted companion for an active family.`

    },
    {
        name: "Apollo",
        type: "Dog",
        image: "images/siberian_husky_apollo.jpg",
        breed: "Siberian Husky",
        sex: "Male",
        color: "Grey and White",
        fixed: "Yes",
        age: 2,
        animal_id: 96321,
        microchip_num: 982000364789223,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Apollo is a handsome Siberian Husky with striking grey and white fur and piercing blue eyes. 
                He's an energetic and playful pup who loves outdoor adventures like hiking and running. 
                Apollo is also incredibly intelligent and enjoys learning new tricks and commands. He's 
                great with children and other dogs, making him an excellent family pet. Apollo is looking 
                for an active household where he can receive plenty of exercise and attention.`

    },
    {
        name: "Cassie",
        type: "Dog",
        image: "images/cavalier_king_charles_spaniel_cassie.jpg",
        breed: "Cavalier King Charles Spaniel",
        sex: "Female",
        color: "Blenheim",
        fixed: "Yes",
        age: 2,
        animal_id: 79823,
        microchip_num: 982000445678901,
        status:
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.",  "Microchipped."
            ],
        about_me: `Say hello to Cassie, a sweet Cavalier King Charles Spaniel with a beautiful blenheim 
                coat. Cassie is known for her affectionate and gentle nature. She loves cuddling with 
                her humans and enjoys being carried around like a baby. Cassie is also great with 
                children and other pets, making her an ideal family companion. She's looking for a 
                loving home where she can receive plenty of attention and affection from her new family.`
        
    },
    {
        name: "Zoe",
        type: "Cat",
        image: "images/sphynx_zoe.jpg",
        breed: "Sphynx",
        sex: "Female",
        color: "Pink",
        fixed: "Yes",
        age: 1,
        animal_id: 74562,
        microchip_num: 982000364789228,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Zoe is a unique Sphynx cat with a soft pink skin and a charming personality. She's a 
                playful and affectionate feline who enjoys cuddling up with her humans for warmth and 
                companionship. Zoe is also curious and enjoys exploring her surroundings, often finding 
                creative ways to entertain herself. She gets along well with other pets and would make a 
                wonderful addition to any loving family. Zoe is looking for a forever home where she can 
                receive all the love and attention she deserves.`

    },
    {
        name: "Willow",
        type: "Cat",
        image: "images/russian_blue_willow.jpg",
        breed: "Russian Blue",
        sex: "Female",
        color: "Blue",
        fixed: "Yes",
        age: 2,
        animal_id: 89654,
        microchip_num: 982000364789226,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Willow is a graceful Russian Blue cat with a sleek blue coat and bright green eyes. She's an 
                independent and sophisticated feline who enjoys her alone time but also loves being near her 
                favorite humans. Willow is curious and enjoys exploring her environment, especially if there are 
                high perches to climb. She's not overly demanding for attention but appreciates affection on her 
                terms. Willow would be a perfect companion for someone seeking a low-maintenance yet affectionate cat.`

    },
    {
        name: "Rusty",
        type: "Dog",
        image: "images/dalmatian_rusty.jpg",
        breed: "Dalmatian",
        sex: "Male",
        color: "Liver spotted",
        fixed: "Yes",
        age: 2,
        animal_id: 63524,
        microchip_num: 982000364789229,
        status: 
            [
                "Health checked.", "Vaccinations up to date.", "Regularly dewormed.", "Microchipped."
            ],
        about_me: `Rusty is a playful Dalmatian with a liver-spotted coat and a boundless zest for life. He's a 
                high-energy dog who loves nothing more than running and playing outdoors. Rusty is also intelligent 
                and eager to please, making him a joy to train. He gets along well with children and other pets, 
                making him an excellent family companion. Rusty is looking for an active household where he can 
                receive plenty of exercise and attention.`

    },
]

//0-9 
let block_number_icons= [
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-0-square" viewBox="0 0 16 16">
                    <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                /svg>`,

                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square" viewBox="0 0 16 16">
                    <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`,   
    
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-square" viewBox="0 0 16 16">
                    <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`,   
    
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-square" viewBox="0 0 16 16">
                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`, 
    
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-4-square" viewBox="0 0 16 16">
                    <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`,

                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-5-square" viewBox="0 0 16 16">
                    <path d="M7.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`,
    
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-6-square" viewBox="0 0 16 16">
                    <path d="M8.21 3.855c1.612 0 2.515.99 2.573 1.899H9.494c-.1-.358-.51-.815-1.312-.815-1.078 0-1.817 1.09-1.805 3.036h.082c.229-.545.855-1.155 1.98-1.155 1.254 0 2.508.88 2.508 2.555 0 1.77-1.218 2.783-2.847 2.783-.932 0-1.84-.328-2.409-1.254-.369-.603-.597-1.459-.597-2.642 0-3.012 1.248-4.407 3.117-4.407Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`,  

                 `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-7-square" viewBox="0 0 16 16">
                    <path d="M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`, 
    
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-8-square" viewBox="0 0 16 16">
                    <path d="M10.97 9.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`,

                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-9-square" viewBox="0 0 16 16">
                    <path d="M7.777 12.146c-1.593 0-2.425-.89-2.52-1.798h1.296c.1.357.539.72 1.248.72 1.36 0 1.88-1.353 1.834-3.023h-.076c-.235.627-.873 1.184-1.934 1.184-1.395 0-2.566-.961-2.566-2.666 0-1.711 1.242-2.731 2.87-2.731 1.512 0 2.971.867 2.971 4.014 0 2.836-1.02 4.3-3.123 4.3m.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>`   
]
