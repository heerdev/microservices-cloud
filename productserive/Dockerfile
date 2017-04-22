FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD target/productserive-0.0.1-SNAPSHOT.jar heerproductservice.jar
RUN sh -c 'touch /heerproductservice.jar'
ENV JAVA_OPTS="-Xmx384m -Xms384m -Xss512k -XX:+UseCompressedOops"

CMD  java $JAVA_OPTS -jar heerproductservice.jar 
