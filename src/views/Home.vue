<!-- vueinit dele full template cole asse -->
<template >
    <section>
        <div>
            <Banner></Banner>
        </div>
        <div>
            <CoffeeSection></CoffeeSection>
        </div>
        <div>
            <PosterSection></PosterSection>
        </div>
        <div>
            <ReviewSection></ReviewSection>
        </div>
    </section>
</template>
<script>
import Banner from './Banner.vue';
import CoffeeSection from './CoffeeSection.vue';
import PosterSection from './PosterSection.vue';
import ReviewSection from './ReviewSection.vue';

export default {
    components: { Banner, CoffeeSection, PosterSection, ReviewSection }
}
</script>
<style >
    
</style>